"use server";

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import projectIdFriendlyToUUID from "./ProjectData";

export default async function createProject(formData: FormData) {
  const rawFormData = {
    project_title: formData.get("project-title")?.toString(),
    project_summary: formData.get("project-summary")?.toString(),
    due_date: formData.get("due-date")?.toString(),
    status: formData.get("project-status")?.toString(),
    owner_id: formData.get("project-owner")?.toString(),
    ac_1: formData.get("acceptance-criteria-1")?.toString(),
    ac_2: formData.get("acceptance-criteria-2")?.toString(),
    ac_3: formData.get("acceptance-criteria-3")?.toString(),
    ac_4: formData.get("acceptance-criteria-4")?.toString()
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

  // const ac_id = "AC1"

  // mutate data

  try {
    if (!rawFormData.project_title) throw new Error("Project title required");
    await sql`INSERT INTO Projects (project_id, project_title, due_date, status, summary, owner_id) VALUES 
    (${project_id}, ${rawFormData.project_title}, ${rawFormData.due_date}, ${rawFormData.status}, ${rawFormData.project_summary}, ${rawFormData.owner_id});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const ac_1 = rawFormData.ac_1 ? rawFormData.ac_1 : "";
  const ac_2 = rawFormData.ac_2 ? rawFormData.ac_2 : "";
  const ac_3 = rawFormData.ac_3 ? rawFormData.ac_3 : "";
  const ac_4 = rawFormData.ac_4 ? rawFormData.ac_4 : "";
  const acArray = [ac_1, ac_2, ac_3, ac_4]

  const project_uuid = await projectIdFriendlyToUUID(project_id);

  try {
    acArray.map(async (ac, index) => {
      let ac_id = 'AC' + (index+1);
      await sql`INSERT INTO acceptance_criteria (ac_id, project_id, ac_summary) VALUES
    (${ac_id}, ${project_uuid.rows[0].id}, ${ac});`;
    }
  )   
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  // revalidate cache
  revalidatePath("/projects");
  redirect("/projects");
}
