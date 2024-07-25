"use server";

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default async function createNewTest(formData: FormData) {
  const rawFormData = {
    project_title: formData.get("project-title")?.toString(),
    test_title: formData.get("test-title")?.toString(),
    test_description: formData.get("test-description")?.toString(),
    test_steps: formData.get("test-steps")?.toString(),
    test_data: formData.get("test_data")?.toString(),
    due_date: formData.get("due-date")?.toString(),
    status: formData.get("test-status")?.toString(),
    assignee: formData.get("assignee")?.toString(),
  };
console.log(rawFormData);

  // Create a user-friendly test ID based on the name of the project and the version of the test
  async function generateTestId(project_title: any) {
    const getProjectId = await sql`SELECT project_id FROM projects WHERE projects.project_title = ${project_title}`;
    const project_id = getProjectId.rows[0].project_id;
    const longProjectId = await getLongProjectId(rawFormData.project_title);
    const numberOfTests =
      await sql`SELECT COUNT(DISTINCT test_title) FROM test_table
                JOIN projects ON test_table.project_id = projects.id::varchar
                WHERE projects.project_title = ${project_title};`;
    const testNumber = (Number(numberOfTests.rows[0].count) + 1)
      .toString()
      .padStart(2, "0");
    const testIteration = await sql`SELECT test_title, COUNT(id)
                                    FROM test_table
                                    WHERE test_title = ${rawFormData.test_title} 
                                    AND project_id = ${longProjectId}
                                    GROUP BY test_title;`;
    console.log('testIteration', testIteration);
    console.log('testIterationRows', testIteration.rows[0])
    const testVersion = testIteration.rows[0] ? (Number(testIteration.rows[0].count) + 1)
      .toString()
      .padStart(2, "0") : '01';

    return `${project_id}-${testNumber}-${testVersion}`;
  }

  const test_id = await generateTestId(rawFormData.project_title);
  console.log('test_id', test_id)
  // mutate data

  async function getLongProjectId(project_title: string | undefined) {
    const id = await sql`SELECT id FROM projects WHERE projects.project_title = ${project_title}`
    return id.rows[0].id;
  }

  const longProjectId = await getLongProjectId(rawFormData.project_title);
  
  try {
    if (!rawFormData.test_title) throw new Error("Test title required");
    await sql`INSERT INTO test_table (project_id, test_id, test_title, due_date, status, test_description, assignee) VALUES 
    (${longProjectId}, ${test_id}, ${rawFormData.test_title}, ${rawFormData.due_date}, ${rawFormData.status}, ${rawFormData.test_description}, ${rawFormData.assignee});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // revalidate cache
  revalidatePath("/tests");
  redirect("/tests");

 
}
