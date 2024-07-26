"use server";

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export default async function editTest(id: string, formData: FormData) {
  // Gather data from edit test form
  const rawFormData = {
    project_title: formData.get("project-title")?.toString(),
    test_title: formData.get("test-title")?.toString(),
    test_description: formData.get("test-description")?.toString(),
    test_steps: formData.get("test-steps")?.toString(),
    test_data: formData.get("test_data")?.toString(),
    due_date: formData.get("due-date")?.toString(),
    status: formData.get("test-status")?.toString(),
    assignee: formData.get("assignee")?.toString(),
    outcome: formData.get("test-outcome")?.toString()
  };

  // mutate data

  async function getLongProjectId(project_title: string | undefined) {
    const id = await sql`SELECT id FROM projects WHERE projects.project_title = ${project_title}`
    return id.rows[0].id;
  }

  const longProjectId = await getLongProjectId(rawFormData.project_title);
  const test_outcome = rawFormData.outcome ? rawFormData.outcome : ""; // Force an empty string so it doesn't break
  
  // Update database with new values
  try {
    if (!rawFormData.test_title) throw new Error("Test title required");
    await sql`
        UPDATE test_table 
        SET project_id = ${longProjectId}, 
            test_title = ${rawFormData.test_title}, 
            test_description = ${rawFormData.test_description},
            test_steps = ${rawFormData.test_steps},
            test_data = ${rawFormData.test_data},
            due_date = ${rawFormData.due_date}, 
            status = ${rawFormData.status}, 
            assignee = ${rawFormData.assignee},
            outcome = ${test_outcome}
        WHERE test_id::varchar = ${id};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // revalidate cache
  revalidatePath("/tests");
  redirect("/tests");

 
}
