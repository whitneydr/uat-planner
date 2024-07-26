"use server";

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import projectIdFriendlyToUUID, { fetchAcceptanceCriteria } from "./ProjectData";

export default async function editProject(id: string, formData: FormData) {
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

  const ac_1 = rawFormData?.ac_1 ? rawFormData?.ac_1 : "";
  const ac_2 = rawFormData?.ac_2 ? rawFormData?.ac_2 : "";
  const ac_3 = rawFormData?.ac_3 ? rawFormData?.ac_3 : "";
  const ac_4 = rawFormData?.ac_4 ? rawFormData?.ac_4 : "";

  console.log('raw form data', rawFormData);
  console.log('ac_1', ac_1);
  console.log('ac_1', typeof ac_1);
  console.log('ac_2', ac_2);
  console.log('ac_3', ac_3);
  console.log('ac_4', ac_4);

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
    await sql`
        UPDATE Projects 
        SET project_id = ${project_id}, 
            project_title = ${rawFormData.project_title}, 
            due_date = ${rawFormData.due_date}, 
            status = ${rawFormData.status}, 
            summary = ${rawFormData.project_summary},
            owner_id = ${rawFormData.owner_id}
    WHERE id = ${id};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const acs = await fetchAcceptanceCriteria(project_id);
  const project_uuid = await projectIdFriendlyToUUID(project_id);
  console.log('acs editProject line 61', acs)

  try {
    await sql`
      UPDATE acceptance_criteria
        SET ac_summary = 
          CASE ac_id 
          WHEN 'AC1' THEN ${ac_1}
          WHEN 'AC2' THEN ${ac_2}
          WHEN 'AC3' THEN ${ac_3}
          WHEN 'AC4' THEN ${ac_4}
          END
      WHERE project_id = ${project_uuid.rows[0].id};
    `;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  
  // try {
  //   await sql`
  //     UPDATE acceptance_criteria
  //     SET ac_summary = new.updated_ac
  //     FROM (
  //       VALUES 
  //         ('AC1', ${ac_1}),
  //         ('AC2', ${ac_2}),
  //         ('AC3', ${ac_3}),
  //         ('AC4', ${ac_4})
  //     ) AS new(ac_id, updated_ac)
  //      WHERE project_id = ${project_uuid.rows[0].id} AND
  //      acceptance_criteria.ac_id = new.ac_id
  //   `;
  // } catch (error) {
  //   return NextResponse.json({ error }, { status: 500 })
  // }
    



  // revalidate cache
  revalidatePath("/projects");
  redirect("/projects");
}
