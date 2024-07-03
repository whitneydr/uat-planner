import Link from "next/link";
import ProjectSummary from "@/app/ui/dashboard/projects/project-summary";
import AcceptanceCriteria from "@/app/ui/dashboard/projects/acceptance-criteria";
import Progress from "@/app/ui/dashboard/projects/progress";
import {projects} from '@/app/lib/placeholder-data';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    console.log(id, projects[1].id);
    return (
        <>

  
        <div className="btn-back"><Link href="/projects"> Back to Project List</Link></div>
        <section>
            <h1>Unit Testing System</h1>
            <ProjectSummary />

            {/* <AcceptanceCriteria projectId={id}/> */}

            <Progress />

            <div className="project-details-section">
                <h2>Tests</h2>
                <div className="test-filters">
                    <a href="#" className="active">All</a>
                    <a href="#">To do</a>
                    <a href="#">Passed</a>
                    <a href="#">Failed</a>
                </div>

                <div className="test-list">
   
                    <div className="test-block">
                        <div className="test-details">
                        <div className="test-id">UST 01.01-02</div>
                        <div className="test-title">Registration button exists</div>
                        <div className="test-project"><span className="mobile"><strong>Project: </strong></span>Unit Testing System</div>
                        <div className="test-assignee"><span className="mobile"><strong>Assigned to: </strong></span>James Blunt</div>
                    </div>
                        <div className="test-status">To do</div>
                        
                    </div>
            
                    <div className="test-block">
                        <div className="test-details">
                        <div className="test-id">UST 01.01-01</div>
                        <div className="test-title">Registration button exists</div>
                        <div className="test-project"><span className="mobile"><strong>Project: </strong></span>Unit Testing System</div>
                        <div className="test-assignee"><span className="mobile"><strong>Assigned to: </strong></span>James Blunt</div>
                        </div>
                        <div className="test-status failed">Failed</div>
                    </div>
            
                    <div className="test-block">
                        <div className="test-details">
                        <div className="test-id">BC 01.01-01</div>
                        <div className="test-title">Calculator adds numbers correctly</div>
                        <div className="test-project"><span className="mobile"><strong>Project: </strong></span>Budget calculator</div>
                        <div className="test-assignee"><span className="mobile"><strong>Assigned to: </strong></span>Harry Styles</div>
                        </div>
                        <div className="test-status passed">Passed</div>
                    </div>
                </div>
            </div>
        </section>
   
    </>
    )
}