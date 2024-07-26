import Link from "next/link";
import TestOutcome from "@/app/ui/dashboard/tests/test-outcome";
import { fetchTestById } from "@/app/lib/TestData";
import { notFound } from "next/navigation";

import Image from "next/image";

export default async function Page({ params }: { params: { id: string } }) {
  const testId = params.id; // eg. UST

  const getTest = await fetchTestById(testId);

  if (!getTest) {
    notFound();
  }

  const testSteps = getTest?.test_steps;
  const testData = getTest?.test_data;
  const testLongId = getTest?.id.toString();

  console.log("testLongId", testLongId);
  console.log("whats the status", getTest?.status);

  return (
    <>
      <div className="btn-back">
        <Link href="/tests"> Back to Test List</Link>
      </div>
      <section>
        <div className="breadcrumb">
          <Link href={`/projects/${getTest?.project_id_friendly}/view`}>
            {getTest?.project_title}
          </Link>{" "}
          - {getTest?.test_id}
        </div>
        <h1>{getTest?.test_title}</h1>
        <div className={`test-status ${getTest?.status}`}>
          {getTest?.status}
        </div>
        {/* <TestResult test_id={testId} status={getTest?.status} /> */}
        <div className="test-details-section">
          <h2>Test description</h2>
          <p>{getTest?.test_description}</p>
          <Link
            href={`/tests/${testId}/edit`}
            className="edit-link"
            title="Edit the test"
          >
            Edit description
          </Link>
        </div>

        <div className="test-details-section">
          <h2>Due date</h2>
          <p>
            {getTest?.due_date.toLocaleDateString("en-gb", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <h2>Tester</h2>
          <p>
            {getTest?.firstname} {getTest?.lastname}
          </p>
        </div>

        {/* <h2>Test steps</h2>
          {testSteps ? <div dangerouslySetInnerHTML={{__html: testSteps}}></div> : ""}
          <h2>Test data</h2>
          {testData? <div dangerouslySetInnerHTML={{__html: testData}}></div> : ""} */}

        {/* <AcceptanceCriteria projectId={getTest?.project_id_friendly} /> */}
        <TestOutcome outcome={getTest.outcome} testId={testId} />
        <Link
          href={`/tests/${testId}/edit`}
          className="btn btn-secondary btn-edit"
          title="Edit the test"
        >
          Edit test{" "}
          <Image src="/icons/edit.svg" width={16} height={16} alt="" />
        </Link>
      </section>
    </>
  );
}
