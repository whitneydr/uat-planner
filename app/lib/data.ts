import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

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
      console.error('Database Error:', err);
      throw new Error('Failed to fetch all users.');
    }
  }


  export async function fetchProjectById(id: string) {
    noStore();
    try {
      const data = await sql`
        SELECT
          projects.id,
          projects.projectid,
          projects.projecttitle,
          projects.duedate,
          projects.ownerid,
          projects.status,
          projects.summary
        FROM projects
        WHERE projects.id = ${id};
      `;
  
      const project = data.rows.map((project) => ({
        ...project
      }));
      console.log(project);
      return project[0];
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch project.');
    }
  }