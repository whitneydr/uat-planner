import { fetchLatestTests, fetchProjectTests } from "@/app/lib/TestData";
import TestItem from "./test-item";
import { tests } from "@/app/lib/placeholder-data";
import Link from "next/link";

const ProjectTestList = async (projectFilter: any) => {
  const projectTests = await fetchProjectTests(projectFilter);
  console.log("projectTests", projectTests);

  return (
    <>
      <div className="test-filters">
        <a href="#" className="active">
          All
        </a>
        <a href="#">To do</a>
        <a href="#">Passed</a>
        <a href="#">Failed</a>
      </div>
      <div className="test-list">
        <div className="test-block test-block-headings desktop">
          <div className="test-details">
            <div>Test ID</div>
            <div>Test title</div>
            <div>Project title</div>
            <div>Assigned to</div>
          </div>
          <div className="test-status">Status</div>
        </div>

        {projectTests.map((test, index) => {
          return (
            <TestItem
              key={index}
              id={test.test_id ? test.test_id : index}
              title={test.test_title}
              projectName={test.project_title}
              status={test.status}
              assignee={`${test.firstname} ${test.lastname}`}
            />
          );
        })}

      
      </div>
      <Link href='/tests/create' className='btn btn-secondary'>+ Add test</Link>
    </>
  );
};

export default ProjectTestList;
