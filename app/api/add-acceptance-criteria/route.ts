import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const project_id = searchParams.get('project_id');
  const ac_id = searchParams.get('ac_id');
  const ac_summary = searchParams.get('ac_summary');
  const ac_status = searchParams.get('ac_status');
 
  try {
    if (!ac_summary) throw new Error('Acceptance criteria summary required');
    await sql`INSERT INTO Acceptance_criteria (
        project_id, 
        ac_id,
        ac_summary,
        ac_status
        ) 
    VALUES (
        ${project_id}, 
        ${ac_id}, 
        ${ac_summary}, 
        ${ac_status}
        );`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const acceptance_criteria = await sql`SELECT * FROM Acceptance_criteria;`;
  return NextResponse.json({ acceptance_criteria }, { status: 200 });
}