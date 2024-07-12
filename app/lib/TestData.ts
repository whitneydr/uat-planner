import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";


export async function fetchLatestTests() {
    noStore();
    try {
      const data = await sql`
          SELECT tests.project_id, tests.test_id, tests.test_title, tests.due_date, projects.project_title, plannerusers.firstname, plannerusers.lastname, tests.status
          FROM test_table AS tests
          JOIN projects ON tests.project_id::uuid = projects.id
          JOIN plannerusers ON projects.owner_id::uuid = plannerusers.id
          ORDER BY due_date ASC
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