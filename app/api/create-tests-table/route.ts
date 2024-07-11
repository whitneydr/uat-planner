import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Test_Table ( 
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, 
      project_id varchar(255),
      test_id varchar(255), 
      test_title varchar(255),
      test_description text,
      test_steps text,
      test_data text,
      acceptance_criteria text[],
      due_date date,
      assignee varchar(255),
      status varchar(50),
      outcome text,
      evidence text

      );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

