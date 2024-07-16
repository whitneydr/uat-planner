import Link from "next/link";
import AcceptanceCriteria from "@/app/ui/dashboard/projects/acceptance-criteria";
import { tests } from "@/app/lib/placeholder-data";
import TestResult from "@/app/ui/dashboard/tests/test-result";
import TestOutcome from "@/app/ui/dashboard/tests/test-outcome";
import { fetchTestById } from "@/app/lib/TestData";

export default async function Page({ params }: { params: { id: string } }) {
  const testId = params.id; // eg. UST

  console.log(`Test params.id is ${testId}`);

  const currentTest = tests.find((test) => test.id === testId);
  const testIndex = tests.findIndex((test) => test.id === testId);
  const getTest = await fetchTestById(testId);

  console.log('getTest', getTest);

  const testSteps = getTest?.test_steps;
  const testData = getTest?.test_data;
  console.log('testSteps', testSteps);

  

  return (
    <>
  
        <div className="btn-back">
          <Link href="/tests"> Back to Test List</Link>
        </div>
        <section>
          <h1>{getTest?.test_title}</h1>
          <TestResult />
          <h2>Test description</h2>
          <p>{getTest?.test_description}</p>
          <h2>Test steps</h2>
          {testSteps ? <div dangerouslySetInnerHTML={{__html: testSteps}}></div> : ""}
          <h2>Test data</h2>
          {testData? <div dangerouslySetInnerHTML={{__html: testData}}></div> : ""}

          <AcceptanceCriteria projectId={getTest?.project_id_friendly} />
          <TestOutcome />
        </section>
  
    </>
  );
}
