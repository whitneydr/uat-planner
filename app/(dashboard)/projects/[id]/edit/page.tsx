import Link from "next/link";
import {
  fetchPlannerUsers,
  fetchProjectById,
  fetchUserName,
} from "@/app/lib/ProjectData";
import EditProjectForm from "@/app/ui/dashboard/projects/edit-project";
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
  const projectId = params.id; // eg. UST

  const [project, plannerUsers] = await Promise.all([
    fetchProjectById(projectId),
    fetchPlannerUsers(),
  ]);

  if (!project) {
    notFound();
  }

  const currentOwner = await fetchUserName(project.owner_id);

  return (
    <>
      <main>
        <div className="btn-back">
          <Link href="/projects"> Back to Project List</Link>
        </div>
        <section>
          <EditProjectForm
            project={project}
            plannerUsers={plannerUsers}
            currentOwner={currentOwner}
          />
        </section>
      </main>
    </>
  );
}