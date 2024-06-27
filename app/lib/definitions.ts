export type User = {
    email: string,
    password: string,
    firstName?: string,
    lastName?: string
}

export type Test = {
    id: string,
    title: string,
    projectID: string,
    projectName: string,
    assignee: string,
    status: 'pass' | 'fail' | 'pending',
    description?: string,
    steps?: string,
    acs?: AcceptanceCriteria[],
    outcome?: string,
    evidence?: any
}

export type Project = {
    id: string,
    title: string,
    summary?: string,
    deadline?: Date,
    status: 'In progress' | 'Complete' | 'Backlog',
    owner: string,
    tests?: string[],
    acs?: AcceptanceCriteria[]
}

export type AcceptanceCriteria = {
    id: string,
    criteria: string,
    status: 'In progress' | 'Complete' | 'No tests assigned'
}