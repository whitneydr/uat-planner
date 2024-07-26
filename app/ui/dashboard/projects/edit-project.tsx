'use client';
import Link from "next/link";
import { useFormState } from "react-dom";

import { Button } from "../../button";
import { users } from "@/app/lib/placeholder-data";
import { useState } from "react";
import { CreateProject } from "@/app/lib/actions";
import { State } from "@/app/lib/actions";
import createProject from "@/app/lib/createProject";
import editProject from "../../../lib/editProject";
import { fetchUserName } from "@/app/lib/ProjectData";

const EditProjectForm = ({project, plannerUsers, currentOwner, acceptanceCriteria}: {project: any; plannerUsers: any; currentOwner: string; acceptanceCriteria: any}) => {

    const updateProjectWithId = editProject.bind(null, project.id);
    
    console.log('current owner', currentOwner);
    console.log('plannerUsers edit project', plannerUsers)
    console.log('edit project', project)
    console.log('ACs', acceptanceCriteria);

    


    interface User {
        id: string,
        firstname: string,
        lastname: string,
        password: string
    }

    return (

        <form className="project-form" action={updateProjectWithId}>
            <div>
                <label htmlFor="project-title">Project Title</label>
                <input type="text" id="project-title" name="project-title" aria-describedby="title-error" defaultValue={project.project_title} required />
                
            </div>
            <div>
                <label htmlFor="project-summary">Project summary</label>
                <textarea name="project-summary" id="project-summary" aria-describedby="summary-error" defaultValue={project.summary} required/>
                
            </div>
            <div>
                <label htmlFor="acceptance-criteria-1">Acceptance criteria 1</label>
                <input type="text" name="acceptance-criteria-1" id="acceptance-criteria-1" aria-describedby="ac-error" defaultValue={acceptanceCriteria[0]?.ac_summary} />
                <label htmlFor="acceptance-criteria-2">Acceptance criteria 2</label>
                <input type="text" name="acceptance-criteria-2" id="acceptance-criteria-2" aria-describedby="ac-error" defaultValue={acceptanceCriteria[1]?.ac_summary} />
                <label htmlFor="acceptance-criteria-3">Acceptance criteria 3</label>
                <input type="text" name="acceptance-criteria-3" id="acceptance-criteria-3" aria-describedby="ac-error" defaultValue={acceptanceCriteria[2]?.ac_summary} />
                <label htmlFor="acceptance-criteria-4">Acceptance criteria 4</label>
                <input type="text" name="acceptance-criteria-4" id="acceptance-criteria-4" aria-describedby="ac-error" defaultValue={acceptanceCriteria[3]?.ac_summary} />
               
            </div>
            <div>
                <label htmlFor="due-date">Due date</label>
                <input type="date" name="due-date" id="due-date" aria-describedby="date-error" defaultValue={project.due_date.toISOString().split('T')[0]} required />
                
            </div>
            <div>
                <label htmlFor="project-status">Status</label>
                <select name="project-status" id="project-status" defaultValue={project.status} required>
                    <option value="to-do">To do</option>
                    <option value="in-progress">In progress</option>
                    <option value="complete">Complete</option>
                    <option value="backlog">Backlog</option>
                </select>
            </div>
            <div>
                <label htmlFor="project-owner">Project owner</label>
                <select name="project-owner" id="project-owner" defaultValue={project.owner_id} required>
                    <option value="" disabled>Choose a project owner</option>
                    {plannerUsers.map((user: User, index: number) => {
                        return (<option key={index} value={user.id}>{`${user.firstname} ${user.lastname}`}</option>)
                    })}
                </select>
            </div>
            <div className="btn-container">
                <Button className="btn btn-primary" type="submit">Update project</Button>
                <Link href="/projects" className="btn btn-secondary">Cancel</Link>
                
            </div>
        </form>

    )
}

export default EditProjectForm;