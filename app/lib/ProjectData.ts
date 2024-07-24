import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

// Fetch a list of users from the database
// Used to populate the dropdown for product owner in the project form
export async function fetchPlannerUsers() {
  try {
    const data = await sql`
        SELECT
          id,
          firstname,
          lastname
        FROM plannerusers
        ORDER BY lastname ASC
      `;

    const plannerUsers = data.rows;
    console.log(plannerUsers);
    return plannerUsers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all users.");
  }
}

// Fetch user name by id

export async function fetchUserName(id: string) {
  const data = await sql`SELECT firstname, lastname FROM plannerUsers WHERE id::varchar = ${id}`;
  console.log('fetch user name', data)
  if (data.rows.length >= 1) {
    return `${data.rows[0].firstname} ${data.rows[0].lastname}`;
  } else {
    return `TBC`
  }
  
}

// Fetch latest projects

export async function fetchLatestProjects() {
  noStore();
  try {
    const data = await sql`
        SELECT projects.project_id, projects.project_title, projects.due_date, projects.owner_id, plannerusers.firstname, plannerusers.lastname, projects.status
        FROM projects
        LEFT JOIN plannerusers ON projects.owner_id = plannerusers.id::varchar
        ORDER BY due_date ASC
        `;

    const latestProjects = data.rows.map((project) => ({
      ...project,
    }));
    console.log('Latest projects project data file', latestProjects)
    return latestProjects;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest projects.");
  }
}


// Fetch a project by short ID eg. 'UTS' or 'SAH'
export async function fetchProjectById(id: string) {
  noStore();
  try {
    const data = await sql`
        SELECT
          projects.id,
          projects.project_id,
          projects.project_title,
          projects.due_date,
          projects.owner_id,
          projects.status,
          projects.summary
        FROM projects
        WHERE projects.project_id = ${id}
      `;

    const project = data.rows.map((project) => ({
      ...project,
    }));
    console.log(project);
    return project[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch project.");
  }
}

// Fetch a project by long ID ie. UUID
export async function fetchProjectByUUID(id: string) {
  noStore();
  try {
    const data = await sql`
        SELECT
          projects.id,
          projects.project_id,
          projects.project_title,
          projects.due_date,
          projects.owner_id,
          projects.status,
          projects.summary
        FROM projects
        WHERE projects.id::varchar = ${id}
      `;

    const project = data.rows.map((project) => ({
      ...project,
    }));
    console.log(project);
    return project[0];
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch project.");
  }
}

// Fetch list of acceptance criteria from AC database, based on the friendly project ID

export async function fetchAcceptanceCriteria(id: string) {
  noStore();
  try {
    const data = await sql`
      SELECT 
        ac.ac_id,
        ac.ac_summary,
        ac.ac_status,
        projects.project_id
      FROM acceptance_criteria AS ac
      JOIN projects ON ac.project_id::uuid = projects.id
      WHERE projects.project_id = ${id}
    `;
    const acceptanceCriteria = data.rows.map((ac) => ({
      ...ac,
    }));
    console.log('fetch acceptance criteria line 93', acceptanceCriteria);
    return acceptanceCriteria;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch acceptance criteria.");
  }
}

// Count the number of tests in a project
export async function countProjectTests(id: string) {
  noStore();
  try {
    const data = await sql`
        SELECT COUNT(*),
        test_table.project_id
        FROM test_table
        JOIN projects ON projects.id = test_table.project_id::uuid
        WHERE projects.project_id = ${id}
        GROUP BY test_table.project_id
      `;

    const project = data.rows.map((project) => ({
      ...project,
    }));
    console.log(project);
    return Number(project[0].count);
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch project.");
  }
}

// Get project uuid from friendly id

export default async function projectIdFriendlyToUUID (friendlyID: any) {
  const data = await sql`SELECT id FROM projects WHERE projects.project_id = ${friendlyID}`;
  return data;
}
   