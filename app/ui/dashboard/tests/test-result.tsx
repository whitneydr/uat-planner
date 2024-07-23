'use client';
import updateTestStatus from "@/app/lib/TestData";
import { useState, useEffect } from "react";

const TestResult = ({test_id, status}: {test_id: any; status: string;}) => {
    const [testStatus, setTestStatus] = useState(status);
    const updateTestStatusWithId = updateTestStatus.bind(null, test_id);
    console.log('whats the testresult status', testStatus);

   //updateTestStatus(id, testStatus);

    return (
        <form action={updateTestStatusWithId}>
        <select name="status" id="status" className={`test-status ${testStatus}`} defaultValue={testStatus} onChange={(e) => {setTestStatus(e.target.value)
        }}>
            <option value="to-do">To do</option>
            <option value="passed">Passed</option>
            <option value="failed">Failed</option>
            <option value="in-progress">In-Progress</option>
            <option value="complete">Complete</option>
        </select>
        </form>

    )
/*
    return (
        <>
        <select name="status" id="status" className={`test-status ${testStatus}`} onChange={(e) => setTestStatus(e.target.value)}>
            <option value="to-do">To do</option>
            <option value="passed">Passed</option>
            <option value="failed">Failed</option>
        </select>
        </>

    ) */
}

export default TestResult;