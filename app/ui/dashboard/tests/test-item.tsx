import Link from "next/link";

interface Props {
    id: string,
    title: string,
    projectID?: string,
    projectName: string,
    assignee: string,
    status: string
}

const TestItem = ({id, title, projectName, assignee, status}: Props) => {


    return (
        <Link href={`/tests/${id}/view`} key={id} className="test-block">
            <div className="test-details">
            <div className="test-id">{id}</div>
            <div className="test-title">{title}</div>
            <div className="test-project"><span className="mobile"><strong>Project: </strong></span>{projectName}</div>
            <div className="test-assignee"><span className="mobile"><strong>Assigned to: </strong></span>{assignee}</div>
        </div>
            <div className={`test-status ${status}`}>{status}</div>
            
        </Link>
    )
}

export default TestItem;