'use client';
import Link from "next/link";
import { useFormState } from "react-dom";

import { Button } from "../../button";

const CreateProjectForm = () => {
    // const initialState = { message: null, errors: {} };
    // const [state, formAction] = useFormState(createInvoice, initialState);

    function handleSubmit() {
        console.log('The form has been submitted')
    }

    return (

        <form className="project-form">
            <div>
                <label htmlFor="project-title">Project Title</label>
                <input type="text" id="project-title" name="project-title" aria-describedby="title-error" />
                <div id="title-error" aria-live="polite" aria-atomic="true" className="error-message">Title error</div>
            </div>
            <div>
                <label htmlFor="project-summary">Project summary</label>
                <textarea name="project-summary" id="project-summary" aria-describedby="summary-error" />
                <div id="summary-error" aria-live="polite" aria-atomic="true" className="error-message">Summary error</div>
            </div>
            <div>
                <label htmlFor="acceptance-criteria">Acceptance criteria 1</label>
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
                <label htmlFor="status">Status</label>
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
                    <option value="harry-styles">Harry Styles</option>
                    <option value="david-bowie">David Bowie</option>
                    <option value="freddie-mercury">Freddie Mercury</option>
                    <option value="brian-cox">Brian Cox</option>
                </select>
            </div>
            <div className="btn-container">
                <Button className="btn btn-primary" type="submit" onClick={handleSubmit}>Create project</Button>
                <Link href="/projects" className="btn btn-secondary">Cancel</Link>
                
            </div>
        </form>

    )
}

export default CreateProjectForm;