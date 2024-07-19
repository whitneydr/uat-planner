import Link from "next/link";
import ProjectSummary from "@/app/ui/dashboard/projects/project-summary";
import AcceptanceCriteria from "@/app/ui/dashboard/projects/acceptance-criteria";
import Progress from "@/app/ui/dashboard/projects/progress";
import {projects} from '@/app/lib/placeholder-data';
import { countProjectTests, fetchPlannerUsers, fetchProjectById, fetchUserName } from "@/app/lib/ProjectData";
import ProjectList from "@/app/ui/dashboard/projects/project-list";
import TestList from "@/app/ui/dashboard/tests/test-list";
import ProjectTestList from "@/app/ui/dashboard/tests/test-list-by-project";
import { fetchProjectTests } from "@/app/lib/TestData";
import EditProjectForm from "@/app/ui/dashboard/projects/edit-project";

// interface Project {
//     id: string,
//     title: string,
//     summary?: string,
//     deadline?: Date,
//     status: 'In progress' | 'Complete' | 'Backlog',
//     owner: string,
//     tests?: string[],
//     acs?: AcceptanceCriteria[]
// }

// interface AcceptanceCriteria {
//     id?: string,
//     criteria?: string,
//     status?: 'In progress' | 'Complete' | 'No tests assigned'
// }

export default async function Page({ params }: { params: { id: string } }) {
 
    const projectId =  params.id; // eg. UST

    const [project, plannerUsers] = await Promise.all([
        fetchProjectById(projectId),
        fetchPlannerUsers(),
    ]);

    const currentOwner = await fetchUserName(project.owner_id);

    if (!project) {
      // notFound();
      return (`Not found`)
    }


    return (
        <>

        <main>
        <div className="btn-back"><Link href="/projects"> Back to Project List</Link></div>
        <section>
            <EditProjectForm project={project} plannerUsers={plannerUsers} currentOwner={currentOwner} />
        </section>
    </main>
    </>
    )
}