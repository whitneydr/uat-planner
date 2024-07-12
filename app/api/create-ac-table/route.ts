import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Acceptance_criteria ( 
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      ac_id varchar(255), 
      project_id varchar(255), 
      ac_summary text,
      ac_status varchar(50) 
      );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

