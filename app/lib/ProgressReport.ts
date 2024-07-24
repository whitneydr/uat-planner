import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";

// Count the total number of tests in a project
// Uses friendly project ID
export async function totalProjectTests(id: string) {
    noStore();
    try {
      const data = await sql`
          SELECT COUNT(*),
          test_table.project_id
          FROM test_table
          JOIN projects ON projects.id::varchar = test_table.project_id
          WHERE projects.project_id = ${id}
          GROUP BY test_table.project_id
        `;
  
      const project = data.rows.map((project) => ({
        ...project,
      }));
      console.log(project);
      if (project.length > 0) {
        return Number(project[0].count);
      } else {
        return 0;
      }
      
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch project.");
    }
  }


  // Count the number of tests in a project by status ie passed, failed, to-do
  // Uses friendly project_id
export async function countProjectTestsByStatus(id: string, status: string) {
    noStore();
    try {
      const data = await sql`
          SELECT COUNT(*),
          test_table.project_id
          FROM test_table
          JOIN projects ON projects.id::varchar = test_table.project_id
          WHERE projects.project_id = ${id} AND test_table.status = ${status}
          GROUP BY test_table.project_id
        `;
  
      const project = data.rows.map((project) => ({
        ...project,
      }));
      console.log('count by stats', status, project);
      if (project.length > 0) {
        return Number(project[0].count);
      } else {
        return 0;
      }
      
    } catch (error) {
      console.error("Database Error:", error);
      throw new Error("Failed to fetch project.");
    }
  }

  // Calculate percentage of tests in a status

  export default function calculatePercentageOfTests(totalTests:number, statusTests:number) {
    if (totalTests && statusTests) {
        return Math.floor((statusTests / totalTests) * 100)
    } else {
        return 0
    }
    
  }