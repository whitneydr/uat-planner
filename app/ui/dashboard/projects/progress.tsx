import calculatePercentageOfTests, { countProjectTestsByStatus, totalProjectTests } from "@/app/lib/ProgressReport";
import Link from "next/link";

const Progress = async ({project_id}: {project_id: any}) => {

    const totalTests = await totalProjectTests(project_id);
    const toDoTests = await countProjectTestsByStatus(project_id, 'to-do');
    const inProgressTests = await countProjectTestsByStatus(project_id, 'in-progress');
    const passedTests = await countProjectTestsByStatus(project_id, 'passed');
    const failedTests = await countProjectTestsByStatus(project_id, 'failed');

    console.log('Progress project_id', project_id)
    console.log('totalTests', totalTests);
    console.log('to do tests', toDoTests);
    console.log('in-progress tests', inProgressTests);
    console.log('passed tests', passedTests);
    console.log('failed tests', failedTests);

    const percentageToDo = calculatePercentageOfTests(totalTests, toDoTests);
    const percentageInProgress = calculatePercentageOfTests(totalTests, inProgressTests);
    const percentagePassed = calculatePercentageOfTests(totalTests, passedTests);
    const percentageFailed = calculatePercentageOfTests(totalTests, failedTests);

    return (
        <div id="progress" className="project-details-section">
                <h2>Progress</h2>

                {totalTests < 1 ? <div className="no-progress"><p>Nothing to see here. <Link href={'/tests/create'} title="Create a test">Add a test</Link> to get started</p></div> : ""}

                <div id="progress-bar">
                    <div id="to-do" style={toDoTests ? {width: `${percentageToDo}%`} : {display: "none"}}>{`${percentageToDo}%`}</div>
                    <div id="in-progress" style={inProgressTests ? {width: `${percentageInProgress}%`} : {display: "none"}}>{`${percentageInProgress}%`}</div>
                    <div id="passed" style={passedTests ? {width: `${percentagePassed}%`} : {display: "none"}}>{`${percentagePassed}%`}</div>
                    <div id="failed" style={failedTests? {width: `${percentageFailed}%`} : {display: "none"}}>{`${percentageFailed}%`}</div>
                </div>
                {totalTests > 0 ? <div className="progress-key">                 
                        <ul>
                            <li className="grey">To do</li>
                            <li className="yellow">In progress</li>
                            <li className="green">Passed</li>
                            <li className="red">Failed</li>
                        </ul> 
                </div> : ""}
            </div>
    )
}

export default Progress;