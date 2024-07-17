'use client';
import Link from "next/link";
import { useFormState } from "react-dom";

import { Button } from "../../button";
import { projects, users } from "@/app/lib/placeholder-data";
import { useEffect, useRef, useState } from "react";
import { fetchLatestProjects } from "@/app/lib/ProjectData";
import createTest from "@/app/lib/createTest";

const CreateTestForm = () => {
    // const initialState = { message: null, errors: {} };
    // const [state, formAction] = useFormState(createInvoice, initialState);
    const [workingProject, setWorkingProject] = useState("0");
    const [acceptanceCriteria, setAcceptanceCriteria] = useState<string[]>([]);
    let currentProject = projects.findIndex(project => project.id === workingProject);
    console.log('current project', currentProject);

    



    // useEffect(() => {
    //    console.log("working project", workingProject);
    //    let currentProject = projects.findIndex(project => project.id === workingProject);
    //    console.log('current project', currentProject)
    // })

    useEffect(() => {
        console.log("acceptance criteria", acceptanceCriteria)
    }, [acceptanceCriteria])


    return (

        <form className="test-form" action={createTest}>
            <div>
                <label htmlFor="project-id">Project</label>
                <select name="project-id" id="project-id" value={workingProject} onChange={e => setWorkingProject(e.target.value)}>
                <option value="">Select project</option>
                    {projects.map((project, index) => {
                       return (<option key={index} value={project.id}>{project.title}</option>)
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="test-title">Test Title</label>
                <input type="text" id="test-title" name="test-title" aria-describedby="title-error" />
                <div id="title-error" aria-live="polite" aria-atomic="true" className="error-message">Title error</div>
            </div>
            <div>
                <label htmlFor="test-description">Test description</label>
                <textarea name="test-description" id="test-description" aria-describedby="description-error" />
                <div id="description-error" aria-live="polite" aria-atomic="true" className="error-message">Summary error</div>
            </div>
            <div>
                <label htmlFor="test-steps">Test steps</label>
                <textarea name="test-steps" id="test-steps" aria-describedby="steps-error" />
                <div id="steps-error" aria-live="polite" aria-atomic="true" className="error-message">Steps error</div>
            </div>
            <div>
                <label htmlFor="test-data">Test data</label>
                <textarea name="test-data" id="test-data" aria-describedby="data-error" />
                <div id="data-error" aria-live="polite" aria-atomic="true" className="error-message">Data error</div>
            </div>

            <div>
                <label htmlFor="status">Acceptance criteria</label>
                <div className="ac-list">
                {acceptanceCriteria.map((ac, index) => {
                    
                    return (
                        // <Button key={index}>{ac}</Button>
                        // ac is a string. Convert to the object to use <AcceptanceCriteriaItem />

                        <div className="ac-block" key={index}>
                        <div className="ac-details">
                            <div className="ac-id">{`AC${index + 1}`}</div>
                            <div className="ac-title">{ac}</div>
                        </div>
                    </div>

                        
                    )
                })}
                </div>
                <select name="acceptance-criteria" id="acceptance-criteria" onChange={e => {setAcceptanceCriteria([...acceptanceCriteria, e.target.value])}}>
                <option value="">Select acceptance criteria</option>
                    {(currentProject > -1) && projects[currentProject].acs.map((ac, index) => {
                       return (<option key={index} value={ac.criteria}>{ac.criteria}</option>)
                    })}
                </select>
                
            </div>

            <div>
                <label htmlFor="test-type">Test type</label>
                <select name="test-type" id="test-type">
                    <option value="automated">Automated</option>
                    <option value="manual">Manual</option>
                </select>
            </div>

            <div>
                <label htmlFor="due-date">Due date</label>
                <input type="date" name="due-date" id="due-date" aria-describedby="date-error" />
                <div id="date-error" aria-live="polite" aria-atomic="true" className="error-message">Date error</div>
            </div>
            
            <div>
                <label htmlFor="status">Status</label>
                <select name="project-status" id="project-status">
                    <option value="to-do">To do</option>
                    <option value="in-progress">In progress</option>
                    <option value="complete">Complete</option>
                    <option value="backlog">Backlog</option>
                </select>
            </div>
            <div>
                <label htmlFor="assignee">Assignee</label>
                <select name="assignee" id="assignee">
                    <option value="">Assign a tester</option>
                    {users.map((user, index) => {
                        return (<option key={index} value={user.id}>{`${user.firstName} ${user.lastName}`}</option>)
                    })}
                </select>
            </div>
            <div className="btn-container">
                <Button className="btn btn-primary" type="submit">Create test</Button>
                <Link href="/tests" className="btn btn-secondary">Cancel</Link>
                
            </div>
        </form>

    )
}

export default CreateTestForm;