import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function fetchLatestTests() {
    noStore();
    try {
      const data = await sql`
          SELECT tests.project_id, tests.test_id, tests.test_title, tests.due_date, tests.assignee, projects.project_title, plannerusers.firstname, plannerusers.lastname, tests.status
          FROM test_table AS tests
          JOIN projects ON tests.project_id = projects.id::varchar
          JOIN plannerusers ON tests.assignee = plannerusers.id::varchar
          ORDER BY due_date ASC
          LIMIT 100;
          `;
  
      const latestTests = data.rows.map((test) => ({
        ...test,
      }));
      return latestTests;
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch the latest tests.");
    }
  }

// Fetch list of tests for project page

export async function fetchProjectTests(project: {projectFilter: string}) {
  noStore();
  try {
    console.log('project fiter', project.projectFilter);
    const data = await sql`
        SELECT tests.project_id, tests.test_id, tests.test_title, tests.due_date, projects.project_title, plannerusers.firstname, plannerusers.lastname, tests.status, projects.project_id
        FROM test_table AS tests
        LEFT JOIN projects ON tests.project_id = projects.id::varchar
        LEFT JOIN plannerusers ON tests.assignee = plannerusers.id::varchar
        WHERE tests.project_id::uuid = ${project.projectFilter}
        ORDER BY due_date ASC
        `;

    const projectTests = data.rows.map((test) => ({
      ...test,
    }));
    return projectTests;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the tests for this project.");
  }
}

  // Fetch a test by ID
export async function fetchTestById(id: string) {
    noStore();
    try {
      const data = await sql`
          SELECT
            test_table.id,
            test_table.project_id,
            test_table.test_id,
            test_table.test_title,
            test_table.test_description,
            test_table.test_steps,
            test_table.test_data,
            test_table.acceptance_criteria,
            test_table.due_date,
            test_table.assignee,
            test_table.status,
            test_table.outcome,
            test_table.evidence,
            projects.project_id AS project_id_friendly,
            projects.project_title,
            plannerusers.firstname,
            plannerusers.lastname
          FROM test_table
          JOIN projects ON projects.id::varchar = test_table.project_id
          LEFT JOIN plannerusers ON projects.owner_id = plannerusers.id::varchar
          WHERE test_table.test_id = ${id};
        `;
  
      const testRow = data.rows.map((testRow) => ({
        ...testRow,
      }));
      console.log('TestData', testRow);
      return testRow[0];
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch test.");
    }
  }

  export default async function updateTestStatus({test_id}: {test_id: any}, status: any) {
    noStore();
    try {
      console.log('updateTestStatus line 92', test_id, status)
      await sql`
        UPDATE test_table
        SET status = ${status}
        WHERE test_id = ${test_id}
      `

    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to update status.")
    }
    revalidatePath("/tests");
  redirect("/tests");
  }