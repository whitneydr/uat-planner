import Link from "next/link";
import AcceptanceCriteria from "@/app/ui/dashboard/projects/acceptance-criteria";
import { tests } from "@/app/lib/placeholder-data";
import TestResult from "@/app/ui/dashboard/tests/test-result";

export default async function Page({ params }: { params: { id: string } }) {
  const testId = params.id; // eg. UST

  console.log(`Test params.id is ${testId}`);

  const currentTest = tests.find((test) => test.id === testId);
  const testIndex = tests.findIndex((test) => test.id === testId);

  const testSteps = tests[testIndex].steps;
  const testData = tests[testIndex].data;
  console.log('testSteps', testSteps);

  return (
    <>
      <main>
        <div className="btn-back">
          <Link href="/tests"> Back to Test List</Link>
        </div>
        <section>
          <h1>{tests[testIndex].title}</h1>
          <TestResult />
          <h2>Test description</h2>
          <p>{tests[testIndex].description}</p>
          <h2>Test steps</h2>
          <div dangerouslySetInnerHTML={{__html: testSteps}}></div>
          <h2>Test data</h2>
          <div dangerouslySetInnerHTML={{__html: testData}}></div>

          <AcceptanceCriteria projectId={testIndex} />
        </section>
      </main>
    </>
  );
}
