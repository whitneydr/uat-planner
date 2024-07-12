import { fetchLatestProjects } from "@/app/lib/ProjectData";
import ProjectItem from "./project-item";
import { projects } from "@/app/lib/placeholder-data";

const ProjectList = async () => {
    const latestProjects = await fetchLatestProjects();
    console.log(latestProjects);
 

    return (
        <main>
            <div className="test-filters">
                <a href="#" className="active">All</a>
                <a href="#">Backlog</a>
                <a href="#">In progress</a>
                <a href="#">Complete</a>
            </div>
            <div className="project-list">
                <div className="project-block project-block-headings desktop">
                    <div className="project-details">
                        <div>Project ID</div>
                        <div>Project name</div>
                        <div>Due date</div>
                        <div>Owner</div>
                    </div>
                    <div className="project-status">Status</div>

                </div>

                {latestProjects.map((project,index) => {
                   return <ProjectItem key={index} id={project.project_id} title={project.project_title} deadline={project.due_date ? project.due_date.toLocaleDateString('en-gb', { year:"numeric", month:"short", day:"numeric"}) : 'TBC'} owner={`${project.firstname} ${project.lastname}`} status={project.status? project.status : 'to-do'} onClick={() => console.log(project.title, "clicked")} />
                })}

                {/* {projects.map((project) => {
                   return <ProjectItem key={project.id} id={project.id} title={project.title} deadline={project.deadline} owner={project.owner} status={project.status} onClick={() => console.log(project.title, "clicked")} />
                })} */}

            </div>
            

        </main>
    )
}

export default ProjectList;