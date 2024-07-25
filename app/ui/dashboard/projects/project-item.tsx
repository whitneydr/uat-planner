import Link from "next/link";

interface Props {
    id: string;
    title: string;
    deadline: string;
    owner: string;
    status: string;
}

const ProjectItem = ({id, title, deadline, owner, status}: Props) => {
    // let statusClass;
    // if (status.toLowerCase() === "in progress") {
    //     statusClass = "in-progress"
    // } else if (status.toLowerCase() === "complete") {
    //     statusClass = "complete"
    // }

    return (
        <Link className="project-block" href={`/projects/${id}/view`} key={id}>
                <div className="project-details">
                    <div className="project-id">{id}</div>
                    <div className="project-title">{title}</div>
                    <div className="project-due-date"><span className="mobile"><strong>Due date: </strong></span>{deadline}
                    </div>
                    <div className="project-owner"><span className="mobile"><strong>Project owner: </strong></span>{owner}</div>
                </div>
                <div className={`project-status ${status}`}>{status}</div>

            </Link>
    )
}

export default ProjectItem;