import Link from "next/link";
import AcceptanceCriteria from "@/app/ui/dashboard/projects/acceptance-criteria";
import Progress from "@/app/ui/dashboard/projects/progress";
import { fetchProjectById } from "@/app/lib/ProjectData";
import ProjectTestList from "@/app/ui/dashboard/tests/test-list-by-project";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const projectId = params.id; // Friendly project id eg. UTS or SAH

  const getProject = await fetchProjectById(projectId);


  // Throws not found message if project doesn't exist in the database
  if (!getProject) {
    notFound();
  }


  return (
    <>
      <main>
        <div className="btn-back">
          <Link href="/projects"> Back to Project List</Link>
        </div>
        <section>
          <h1>{getProject.project_title}</h1>
          <div className={`project-page project-status ${getProject.status}`}>{getProject.status}</div>
          <h2>Project summary</h2>
          <p>{getProject.summary}</p>
          <Link href={`/projects/${projectId}/edit`}>Edit summary</Link>

          <h2>Due date</h2>
          <p>
            {getProject.due_date?.toLocaleDateString("en-gb", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <AcceptanceCriteria projectId={projectId} />

          <Progress project_id={projectId} />

          <div className="project-details-section">
            <h2>Tests</h2>

            <ProjectTestList projectFilter={getProject.id} />
          </div>
        </section>
      </main>
    </>
  );
}
