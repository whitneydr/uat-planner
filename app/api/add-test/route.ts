import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const project_id = searchParams.get('project_id');
  const test_id = searchParams.get('test_id');
  const test_title = searchParams.get('test_title');
  const test_description = searchParams.get('test_description');
  const test_steps = searchParams.get('test_steps');
  const test_data = searchParams.get('test_data');
  const acceptance_criteria = searchParams.get('acceptance_criteria');
  const due_date = searchParams.get('due_date');
  const assignee = searchParams.get('assignee');
  const status = searchParams.get('status');
  const outcome = searchParams.get('outcome');
  const evidence = searchParams.get('evidence');
 
  try {
    if (!project_id || !test_title) throw new Error('Project and test title required');
    await sql`INSERT INTO Test_Table (
        project_id,
        test_id,
        test_title,
        test_description,
        test_steps,
        test_data,
        acceptance_criteria,
        due_date,
        assignee,
        status,
        outcome,
        evidence
    ) VALUES (${project_id}, ${test_id}, ${test_title}, ${test_description}, ${test_steps}, ${test_data}, ${acceptance_criteria}, ${due_date}, ${assignee}, ${status}, ${outcome}, ${evidence});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const testTable = await sql`SELECT * FROM Test_Table;`;
  return NextResponse.json({ testTable }, { status: 200 });
}