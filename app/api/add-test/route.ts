import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const testTitle = searchParams.get('TestTitle');
  const project = searchParams.get('project');


 
  try {
    if (!testTitle) throw new Error('Test title required');
    await sql`INSERT INTO Tests (TestTitle, project) VALUES (${testTitle}, ${project});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const tests = await sql`SELECT * FROM Tests;`;
  return NextResponse.json({ tests }, { status: 200 });
}