import { fetchLatestProjects } from "../../../lib/ProjectData";
import ProjectItem from "./project-item";
import { projects } from "@/app/lib/placeholder-data";

const ProjectList = async (filterStatus: any, projectFilter: any) => {
  const latestProjects = await fetchLatestProjects();
  console.log(latestProjects);
  console.log("filterStatus", filterStatus);

  return (
    // <main>
    //     <div className="test-filters">
    //         <a href="#" className="active">All</a>
    //         <a href="#">Backlog</a>
    //         <a href="#">In progress</a>
    //         <a href="#">Complete</a>
    //     </div>
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

      {latestProjects.map((project, index) => {
        return (
          <ProjectItem
            key={index}
            id={project.project_id}
            title={project.project_title}
            deadline={
              project.due_date
                ? project.due_date.toLocaleDateString("en-gb", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : "TBC"
            }
            owner={
              project.owner_id
                ? `${project.firstname} ${project.lastname}`
                : "TBC"
            }
            status={project.status ? project.status : "to-do"}
          />
        );
      })}

      {/* {filterStatus === 'all' ? latestProjects.map((project,index) => {
                   return <ProjectItem key={index} id={project.project_id} title={project.project_title} deadline={project.due_date ? project.due_date.toLocaleDateString('en-gb', { year:"numeric", month:"short", day:"numeric"}) : 'TBC'} owner={`${project.firstname} ${project.lastname}`} status={project.status? project.status : 'to-do'} onClick={() => console.log(project.title, "clicked")} />
                }) : latestProjects.filter((project) => project.status === filterStatus).map((project,index) => {
                    return <ProjectItem key={index} id={project.project_id} title={project.project_title} deadline={project.due_date ? project.due_date.toLocaleDateString('en-gb', { year:"numeric", month:"short", day:"numeric"}) : 'TBC'} owner={`${project.firstname} ${project.lastname}`} status={project.status? project.status : 'to-do'} onClick={() => console.log(project.title, "clicked")} />
                 })} */}
    </div>

    // </main>
  );
};

export default ProjectList;
