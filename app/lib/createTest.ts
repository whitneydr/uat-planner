"use server";

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import projectIdFriendlyToUUID from "./ProjectData";

export default async function createTest(formData: FormData) {
  const rawFormData = {
    project_id: formData.get("project-id")?.toString(),
    test_title: formData.get("test-title")?.toString(),
    test_description: formData.get("test-description")?.toString(),
    test_steps: formData.get("test-steps")?.toString(),
    test_data: formData.get("test_data")?.toString(),
    due_date: formData.get("due-date")?.toString(),
    status: formData.get("test-status")?.toString(),
    assignee: formData.get("assignee")?.toString(),
  };

  console.log(rawFormData);
  const longProjectId = await projectIdFriendlyToUUID(rawFormData.project_id);
  console.log('longProjectId', longProjectId)

  // Create a user-friendly test ID based on the name of the project and the version of the test
  async function generateTestId(project_id: any) {
    const numberOfTests =
      await sql`SELECT COUNT(DISTINCT test_title) FROM test_table
                JOIN projects ON test_table.project_id = projects.id::varchar
                WHERE projects.project_id = ${project_id};`;
    const testNumber = (Number(numberOfTests.rows[0].count) + 1)
      .toString()
      .padStart(2, "0");
    const testIteration = await sql`SELECT test_title, COUNT(id)
                                    FROM test_table
                                    WHERE test_title = ${rawFormData.test_title} 
                                    AND project_id = ${longProjectId.rows[0].id}
                                    GROUP BY test_title;`;
    const testVersion = testIteration.rows[0] ? (Number(testIteration.rows[0].count) + 1)
      .toString()
      .padStart(2, "0") : '01';

    return `${project_id}-${testNumber}-${testVersion}`;
  }

  const test_id = await generateTestId(rawFormData.project_id);
  console.log('test_id', test_id)
  // mutate data

  
  try {
    if (!rawFormData.test_title) throw new Error("Test title required");
    await sql`INSERT INTO test_table (project_id, test_title, due_date, status, test_description) VALUES 
    (${rawFormData.project_id}, ${rawFormData.test_title}, ${rawFormData.due_date}, ${rawFormData.status}, ${rawFormData.test_description});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // revalidate cache
  revalidatePath("/tests");
  redirect("/tests");

 
}
