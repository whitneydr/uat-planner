"use server";

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function createProject(formData: FormData) {
  const rawFormData = {
    project_title: formData.get("project-title")?.toString(),
    project_summary: formData.get("project-summary")?.toString(),
    due_date: formData.get("due-date")?.toString(),
    status: formData.get("project-status")?.toString(),
  };

  console.log(rawFormData);

  // Create a user-friendly 3-letter project ID based on the name of the project
  function generateProjectId(project_title: any) {
    const idLength = 3;
    let words = project_title.split(" ");
    let acronym = [];

    while (words.length < idLength) {
      words.push((Math.random() * 10).toString());
    }

    for (let i = 0; i < idLength; i++) {
      acronym.push(words[i][0]);
    }
    return acronym.join("").toUpperCase();
  }

  const project_id = generateProjectId(rawFormData.project_title);
  console.log("new project id", project_id);

  // mutate data

  try {
    if (!rawFormData.project_title) throw new Error("Project title required");
    await sql`INSERT INTO Projects (project_id, project_title, due_date, status, summary) VALUES 
    (${project_id}, ${rawFormData.project_title}, ${rawFormData.due_date}, ${rawFormData.status}, ${rawFormData.project_summary});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // revalidate cache
  revalidatePath("/projects");
  redirect("/projects");
}
