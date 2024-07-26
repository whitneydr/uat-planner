import Link from "next/link";
import {
  fetchLatestProjects,
  fetchPlannerUsers,
  fetchProjectByUUID,
} from "@/app/lib/ProjectData";
import EditTestForm from "@/app/ui/dashboard/tests/edit-test";
import { fetchTestById } from "@/app/lib/TestData";
import { notFound } from "next/navigation";


export default async function Page({ params }: { params: { id: string } }) {
  const testId = params.id; // eg. UST

  const [test, plannerUsers, projects] = await Promise.all([
    fetchTestById(testId),
    fetchPlannerUsers(),
    fetchLatestProjects(),
  ]);

  if (!test) {
    notFound();
  }

  const currentProject = await fetchProjectByUUID(test.project_id);

  return (
    <>
      <main>
        <div className="btn-back">
          <Link href="/tests"> Back to Test List</Link>
        </div>
        <section>
          <EditTestForm
            tests={test}
            plannerUsers={plannerUsers}
            projects={projects}
            currentProject={currentProject}
          />
        </section>
      </main>
    </>
  );
}
