import Link from "next/link";
import AcceptanceCriteria from "@/app/ui/dashboard/projects/acceptance-criteria";
import TestResult from "@/app/ui/dashboard/tests/test-result";
import TestOutcome from "@/app/ui/dashboard/tests/test-outcome";
import { fetchTestById } from "@/app/lib/TestData";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const testId = params.id; // eg. UST

  const getTest = await fetchTestById(testId);

  if(!getTest) {
    notFound();
  }

  const testSteps = getTest?.test_steps;
  const testData = getTest?.test_data;

  

  return (
    <>
  
        <div className="btn-back">
          <Link href="/tests"> Back to Test List</Link>
        </div>
        <section>
          <div className="breadcrumb"><Link href={`/projects/${getTest?.project_id_friendly}/view`}>{getTest?.project_title}</Link> - {getTest?.test_id}</div>
          <h1>{getTest?.test_title}</h1>
          <TestResult />
          <h2>Test description</h2>
          <p>{getTest?.test_description}</p>
          <Link href={`/tests/${testId}/edit`}>Edit description</Link>
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
