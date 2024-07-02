import AcceptanceCriteriaItem from "./ac-item";
import { projects } from "@/app/lib/placeholder-data";

const AcceptanceCriteria = ({ projectId }: { projectId: number }) => {
  return (
    <div id="acceptance-criteria" className="project-details-section">
      <h2>Acceptance Criteria</h2>
      <div className="ac-list">
        {projects[projectId].acs.map((ac, index) => {
          return (
            <AcceptanceCriteriaItem
              key={index}
              id={ac.id}
              criteria={ac.criteria}
              status={ac.status}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AcceptanceCriteria;
