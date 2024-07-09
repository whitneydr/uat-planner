import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const result = await sql`CREATE TABLE PlannerUsers ( 
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        firstName VARCHAR(255) NOT NULL,
        lastName VARCHAR(255),
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}