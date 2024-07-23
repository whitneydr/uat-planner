'use client';
import Link from "next/link";
import { useFormState } from "react-dom";

import { Button } from "../../button";
import { users } from "@/app/lib/placeholder-data";
import { useState } from "react";
import { CreateProject } from "@/app/lib/actions";
import { State } from "@/app/lib/actions";
import createProject from "@/app/lib/createProject";


const CreateProjectForm = ({plannerUsers}: {plannerUsers: any}) => {
    


    interface User {
        id: string,
        firstname: string,
        lastname: string,
        password: string
    }

    return (

        <form className="project-form" action={createProject}>
            <div>
                <label htmlFor="project-title">Project Title</label>
                <input type="text" id="project-title" name="project-title" aria-describedby="title-error" required />
            </div>
            <div>
                <label htmlFor="project-summary">Project summary</label>
                <textarea name="project-summary" id="project-summary" aria-describedby="summary-error" />
            </div>
            <div>
                <label htmlFor="acceptance-criteria">Acceptance criteria</label>
                <input type="text" name="acceptance-criteria-1" id="acceptance-criteria-1" aria-describedby="ac-error" />
                <label htmlFor="acceptance-criteria">Acceptance criteria 2</label>
                <input type="text" name="acceptance-criteria-2" id="acceptance-criteria-2" aria-describedby="ac-error" />
            </div>
            <div>
                <label htmlFor="due-date">Due date</label>
                <input type="date" name="due-date" id="due-date" aria-describedby="date-error" />
            </div>
            <div>
                <label htmlFor="project-status">Status</label>
                <select name="project-status" id="project-status">
                    <option value="to-do">To do</option>
                    <option value="in-progress">In progress</option>
                    <option value="complete">Complete</option>
                    <option value="backlog">Backlog</option>
                </select>
            </div>
            <div>
                <label htmlFor="project-owner">Project owner</label>
                <select name="project-owner" id="project-owner">
                    <option value="Choose a project owner">Choose a project owner</option>
                    {plannerUsers.map((user: User, index: number) => {
                        return (<option key={index} value={user.id}>{`${user.firstname} ${user.lastname}`}</option>)
                    })}
                </select>
            </div>
            <div className="btn-container">
                <Button className="btn btn-primary" type="submit">Create project</Button>
                <Link href="/projects" className="btn btn-secondary">Cancel</Link>
                
            </div>
        </form>

    )
}

export default CreateProjectForm;