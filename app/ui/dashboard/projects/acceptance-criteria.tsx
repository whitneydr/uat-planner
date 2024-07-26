import { fetchAcceptanceCriteria } from "@/app/lib/ProjectData";
import AcceptanceCriteriaItem from "./ac-item";
import { projects } from "@/app/lib/placeholder-data";
import Link from "next/link";

const AcceptanceCriteria = async ({ projectId }: { projectId: any }) => {
  const getAC = await fetchAcceptanceCriteria(projectId);
  console.log('getAC', getAC);
  return (
    <div id="acceptance-criteria" className="project-details-section">
      <h2>Acceptance Criteria</h2>
      <div className="ac-list">
        {getAC.map((ac, index) => {
          if (ac.ac_summary === "") {
            return <Link href={`/projects/${projectId}/edit`} key={index} className="btn edit-link" title="Edit project to add acceptance criteria">+ Add acceptance criteria {index + 1}</Link>
          }
          return (
            <AcceptanceCriteriaItem
              key={index}
              id={ac.ac_id}
              criteria={ac.ac_summary}
              status={ac.ac_status ? ac.ac_status : "to-do"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AcceptanceCriteria;
