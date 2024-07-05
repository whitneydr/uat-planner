import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE Tests ( 
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, 
    ProjectID varchar,
    TestID varchar(255), 
    TestTitle varchar(255), 
    TestDescription text,
    TestSteps text,
    TestData text,
    AcceptanceCriteria varchar ARRAY,
    DueDate date, 
    Assignee varchar, 
    Status varchar(255), 
    Outcome text
    );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}