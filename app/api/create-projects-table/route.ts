import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE Projects ( 
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, 
    project_id varchar(3) unique, 
    project_title varchar(255) unique NOT NULL, 
    due_date date, 
    owner_id varchar, 
    status varchar(255), 
    summary text
    );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
