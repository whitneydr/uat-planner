'use client';
import Link from "next/link";
import { Button } from "../../button";
import createNewTest from "@/app/lib/createNewTest";
import { useState } from "react";
import { UUID } from "crypto";
import editTest from "@/app/lib/editTest";
import { fetchProjectById } from "@/app/lib/ProjectData";

// interface Test {
//     project_id: string,
//     test_id: string,
//     test_title: string,
//     due_date: string,
//     assignee: string,
//     project_title: string,
//     firstname: string,
//     lastname: string,
//     status: string
// }

interface User {
    id?: string,
    firstname?: string,
    lastname?: string
}

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

const EditTestForm = ({plannerUsers, tests, projects, currentProject}: {plannerUsers: User[]; tests: any; projects: Project[]; currentProject: any}) => {

    const updateTestWithId = editTest.bind(null, tests.test_id);

    console.log('whats in tests now', tests)
    console.log('whats in projects now', projects)
    console.log('edit-test whats in users', plannerUsers);
    console.log('current project', currentProject)

  
    
  



    return (

        <form className="project-form" action={updateTestWithId}>
             <div>
                <label htmlFor="project-title">Project title</label>
                <select name="project-title" id="project-title" defaultValue={currentProject.project_title} required >
                <option value="" disabled>Select a project</option>
                    {projects.map((project:Project, index: number) => {
                       return (<option key={index} value={project.id}>{project.project_title}</option>)
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="test-title">Test Title</label>
                <input type="text" id="test-title" name="test-title" aria-describedby="title-error" defaultValue={tests.test_title} required />
               
            </div>
            <div>
                <label htmlFor="test-description">Test description</label>
                <textarea name="test-description" id="test-description" aria-describedby="summary-error" defaultValue={tests.test_description}/>
            
            </div>

            <div>
                <label htmlFor="due-date">Due date</label>
                <input type="date" name="due-date" id="due-date" aria-describedby="date-error" defaultValue={tests.due_date.toISOString().split('T')[0]} />
                
            </div>
            <div>
                <label htmlFor="test-status">Status</label>
                <select name="test-status" id="test-status" defaultValue={tests.status}>
                    <option value="to-do">To do</option>
                    <option value="in-progress">In progress</option>
                    <option value="passed">Passed</option>
                    <option value="failed">Failed</option>
                </select>
            </div>
            <div>
                <label htmlFor="assignee">Assignee</label>
                <select name="assignee" id="assignee" defaultValue={tests.assignee ? tests.assignee : ''}>
                    <option value="Choose a tester">Choose a tester</option>
                    {plannerUsers.map((user: User, index: number) => {
                        return (<option key={index} value={user.id}>{`${user.firstname} ${user.lastname}`}</option>)
                    })}
                </select>
            </div>
            <div>
                <label htmlFor="test-outcome">Test outcome</label>
                <textarea name="test-outcome" id="test-outcome" aria-describedby="summary-error" defaultValue={tests.outcome}/>
            
            </div>
            <div className="btn-container">
                <Button className="btn btn-primary" type="submit">Update test</Button>
                <Link href="/tests" className="btn btn-secondary">Cancel</Link>
                
            </div>
           
        </form>

    )
}

export default EditTestForm;