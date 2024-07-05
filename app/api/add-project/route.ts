import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const projectTitle = searchParams.get('projectTitle');
  const summary = searchParams.get('summary');
  const dueDate = searchParams.get('dueDate');
  const ownerID = searchParams.get('ownerID');
  const status = searchParams.get('status');
  const projectID = projectTitle ? generateProjectId(projectTitle): "Placeholder title";

  // Create a user-friendly 3-letter project ID based on the name of the project
  function generateProjectId(projectTitle: string) {
    const idLength = 3;
    let words = projectTitle.split(' ');
    let acronym = [];

    while (words.length < idLength) {
        words.push((Math.random()*10).toString());
    }
    
    for (let i = 0; i < idLength; i++) {
        acronym.push(words[i][0]);
    }
    return acronym.join("").toUpperCase();
}

 
  try {
    if (!projectTitle) throw new Error('Project title required');
    await sql`INSERT INTO Projects (projectID, projectTitle, DueDate, OwnerID, status, summary) VALUES (${projectID}, ${projectTitle}, ${dueDate}, ${ownerID}, ${status}, ${summary});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const projects = await sql`SELECT * FROM Projects;`;
  return NextResponse.json({ projects }, { status: 200 });
}