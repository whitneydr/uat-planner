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
    return plannerUsers;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all users.");
  }
}

// Fetch latest projects

export async function fetchLatestProjects() {
  noStore();
  try {
    const data = await sql`
        SELECT projects.project_id, projects.project_title, projects.due_date, plannerusers.firstname, plannerusers.lastname, projects.status
        FROM projects
        JOIN plannerusers ON projects.owner_id::uuid = plannerusers.id
        ORDER BY due_date ASC
        `;

    const latestProjects = data.rows.map((project) => ({
      ...project,
    }));
    return latestProjects;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest projects.");
  }
}

// Fetch a project by ID
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
        WHERE projects.project_id = ${id};
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

// Fetch list of acceptance criteria from AC database, based on the project ID

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
