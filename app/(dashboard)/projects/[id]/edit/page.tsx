import Link from "next/link";
import {
  fetchPlannerUsers,
  fetchProjectById,
  fetchUserName,
} from "@/app/lib/ProjectData";
import EditProjectForm from "@/app/ui/dashboard/projects/edit-project";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const projectId = params.id; // Friendly project id eg. UTS or SAH

  const [project, plannerUsers] = await Promise.all([
    fetchProjectById(projectId),
    fetchPlannerUsers(),
  ]);

  // Throws a 'not found' message if the project does not exist in the database
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
