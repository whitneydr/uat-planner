import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const firstName = searchParams.get('firstName');
  const lastName = searchParams.get('lastName');
  const email = searchParams.get('email');
  const password = searchParams.get('password')
 
  try {
    if (!email || !firstName) throw new Error('Email and first name required');
    await sql`INSERT INTO PlannerUsers (firstName, lastName, email, password) VALUES (${firstName}, ${lastName}, ${email}, ${password});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const plannerUsers = await sql`SELECT * FROM PlannerUsers;`;
  return NextResponse.json({ plannerUsers }, { status: 200 });
}