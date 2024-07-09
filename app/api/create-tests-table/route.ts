import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE Tests ( 
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, 
    ProjectID text,
    TestID text, 
    TestTitle text, 
    TestDescription text,
    TestSteps text,
    TestData text,
    AcceptanceCriteria text,
    DueDate date, 
    Assignee varchar, 
    Status text, 
    Outcome text
    );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}