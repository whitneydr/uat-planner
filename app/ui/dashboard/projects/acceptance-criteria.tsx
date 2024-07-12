import { fetchAcceptanceCriteria } from "@/app/lib/ProjectData";
import AcceptanceCriteriaItem from "./ac-item";
import { projects } from "@/app/lib/placeholder-data";

const AcceptanceCriteria = async ({ projectId }: { projectId: any }) => {
  const getAC = await fetchAcceptanceCriteria(projectId);
  console.log('getAC', getAC);
  return (
    <div id="acceptance-criteria" className="project-details-section">
      <h2>Acceptance Criteria</h2>
      <div className="ac-list">
        {getAC.map((ac, index) => {
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
