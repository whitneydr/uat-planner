import Link from "next/link";
import AcceptanceCriteria from "@/app/ui/dashboard/projects/acceptance-criteria";
import Progress from "@/app/ui/dashboard/projects/progress";
import { countProjectTests, fetchProjectById } from "@/app/lib/ProjectData";
import ProjectTestList from "@/app/ui/dashboard/tests/test-list-by-project";
import { notFound } from "next/navigation";


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

    console.log(`The params.id is ${projectId}`)

    // const currentProject = projects.find((project) => project.id === projectId);
    // const projectIndex = projects.findIndex((project) =>  project.id === projectId);

    const getProject = await fetchProjectById(projectId);
    const getTestCount = await countProjectTests(projectId);

    if(!getProject) {
        notFound();
    }
   
   
    console.log('getProject', getProject);

    return (
        <>

        <main>
        <div className="btn-back"><Link href="/projects"> Back to Project List</Link></div>
        <section>
            <h1>{getProject.project_title}</h1>
            <h2>Project summary</h2>
            <p>{getProject.summary}</p>
            <Link href={`/projects/${projectId}/edit`}>Edit summary</Link>

            <h2>Due date</h2>
            <p>{getProject.due_date?.toLocaleDateString('en-gb', { year:"numeric", month:"short", day:"numeric"})}</p>
            <AcceptanceCriteria projectId={projectId} />

            <Progress />

          

            <div className="project-details-section">
                <h2>Tests</h2>
               
                <ProjectTestList projectFilter={getProject.id} />


               
               
            </div>
        </section>
    </main>
    </>
    )
}