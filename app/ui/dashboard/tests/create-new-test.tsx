'use client';
import Link from "next/link";
import { Button } from "../../button";
import createNewTest from "@/app/lib/createNewTest";
import { useState } from "react";
import { UUID } from "crypto";

interface Project {
    id?: UUID,
    project_id?: string, // short ID
    project_title?: string,
    due_date?: string,
    owner_id?: string,
    firstname?: string,
    lastname?: string,
    status?: string
}

interface User {
    id?: string,
    firstname?: string,
    lastname?: string
}

const CreateNewTestForm = ({plannerUsers, projects,}: {plannerUsers: User[]; projects: Project[]}) => {
    console.log('whats in projects now', projects)
    console.log('whats in users', plannerUsers);

  



    return (

        <form className="project-form" action={createNewTest}>
             <div>
                <label htmlFor="project-title">Project title</label>
                <select name="project-title" id="project-title">
                <option value="" disabled>Select project</option>
                    {projects.map((project:Project, index: number) => {
                       return (<option key={index} value={project.id}>{project.project_title}</option>)
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
                <textarea name="test-description" id="test-description" aria-describedby="summary-error" />
                <div id="summary-error" aria-live="polite" aria-atomic="true" className="error-message">Summary error</div>
            </div>
            <div>
                <label htmlFor="acceptance-criteria">Acceptance criteria</label>
                <input type="text" name="acceptance-criteria-1" id="acceptance-criteria-1" aria-describedby="ac-error" />
                <label htmlFor="acceptance-criteria">Acceptance criteria 2</label>
                <input type="text" name="acceptance-criteria-2" id="acceptance-criteria-2" aria-describedby="ac-error" />
                <div id="ac-error" aria-live="polite" aria-atomic="true" className="error-message">AC error</div> 
            </div>
            <div>
                <label htmlFor="due-date">Due date</label>
                <input type="date" name="due-date" id="due-date" aria-describedby="date-error" />
                <div id="date-error" aria-live="polite" aria-atomic="true" className="error-message">Date error</div>
            </div>
            <div>
                <label htmlFor="test-status">Status</label>
                <select name="test-status" id="test-status">
                    <option value="to-do">To do</option>
                    <option value="in-progress">In progress</option>
                    <option value="complete">Complete</option>
                    <option value="backlog">Backlog</option>
                </select>
            </div>
            <div>
                <label htmlFor="assignee">Assignee</label>
                <select name="assignee" id="assignee">
                    <option value="Choose a tester">Choose a tester</option>
                    {plannerUsers.map((user: User, index: number) => {
                        return (<option key={index} value={user.id}>{`${user.firstname} ${user.lastname}`}</option>)
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

export default CreateNewTestForm;