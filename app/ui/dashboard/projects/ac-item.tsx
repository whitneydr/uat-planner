interface Props {
    id: string,
    criteria: string,
    status: string
}

const AcceptanceCriteriaItem = ({ id, criteria, status }: Props) => {
    let statusName;
    switch (status) {
        case 'complete':
            statusName = 'Complete'
            break;
        case 'in-progress':
            statusName = 'In progress'
            break;
        case 'to-do':
            statusName = 'To do'
            break;
        default:
            return statusName;
    }

    console.log(statusName);

    return (

       
        <div className="ac-block">
            <div className="ac-details">
                <div className="ac-id">{id}</div>
                <div className="ac-title">{criteria}</div>
            </div>
            <div className={`ac-status ${status}`}>{statusName}</div>
        </div>

    )
}

export default AcceptanceCriteriaItem;