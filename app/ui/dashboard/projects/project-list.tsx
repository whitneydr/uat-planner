import ProjectItem from "./project-item";
import { projects } from "@/app/lib/placeholder-data";

const ProjectList = () => {

 

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

                {projects.map((project) => {
                   return <ProjectItem key={project.id} id={project.id} title={project.title} deadline={project.deadline} owner={project.owner} status={project.status} onClick={() => console.log(project.title, "clicked")} />
                })}

            </div>
            

        </main>
    )
}

export default ProjectList;