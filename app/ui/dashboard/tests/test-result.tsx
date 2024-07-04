'use client';
import { useState } from "react";

const TestResult = () => {
    const [testStatus, setTestStatus] = useState('to-do');

    return (
        <>
        <select name="status" id="status" className={`test-status ${testStatus}`} onChange={(e) => setTestStatus(e.target.value)}>
            <option value="to-do">To do</option>
            <option value="passed">Passed</option>
            <option value="failed">Failed</option>
        </select>
        </>
    )
}

export default TestResult;