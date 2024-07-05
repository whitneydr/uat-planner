import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE Projects ( 
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, 
    ProjectID varchar(3) unique, 
    ProjectTitle varchar(255) unique NOT NULL, 
    DueDate date, 
    OwnerID varchar, 
    Status varchar(255), 
    Summary text
    );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
