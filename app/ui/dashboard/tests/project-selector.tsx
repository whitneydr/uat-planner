import { fetchLatestProjects } from '@/app/lib/ProjectData';
import React from 'react'

const ProjectSelector = async (workingProject: any, handleSelect: any) => {
    const latestProjects = await fetchLatestProjects();
  return (
    <div>
    <label htmlFor="project-id">Project</label>
    <select name="project-id" id="project-id" value={workingProject} onChange={handleSelect}>
    <option value="">Select project</option>
        {latestProjects.map((project, index) => {
            console.log('project selector', project)
           return (<option key={index} value={project.project_id}>{project.project_title}</option>)
        })}
    </select>
</div>
  )
}

export default ProjectSelector;