import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const project_title = searchParams.get('project_title');
  const summary = searchParams.get('summary');
  const due_date = searchParams.get('due_date');
  const owner_id = searchParams.get('owner_id');
  const status = searchParams.get('status');
  const project_id = project_title ? generateProjectId(project_title): "Placeholder title";

  // Create a user-friendly 3-letter project ID based on the name of the project
  function generateProjectId(project_title: string) {
    const idLength = 3;
    let words = project_title.split(' ');
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
    if (!project_title) throw new Error('Project title required');
    await sql`INSERT INTO Projects (project_id, project_title, due_date, owner_id, status, summary) VALUES (${project_id}, ${project_title}, ${due_date}, ${owner_id}, ${status}, ${summary});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const projects = await sql`SELECT * FROM Projects;`;
  return NextResponse.json({ projects }, { status: 200 });
}