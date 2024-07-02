import TestItem from "./test-item";
import { tests } from "@/app/lib/placeholder-data";

const TestList = () => {

    return (
        <>
        <div className="test-filters">
            <a href="#" className="active">All</a>
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

            {tests.map((test) => {
                return <TestItem key={test.id} id={test.id} title={test.title} projectName={test.projectName} status={test.status} assignee={test.assignee} />
            })}

            
        </div>


    </>
    )
}

export default TestList;