// Database


export const users = [
    {
        id:1001,
        email: "test@test.com",
        password: "OpenSesame",
        firstName: "Harry",
        lastName: "Styles"
    },
    {
        id:1002,
        email: "check@test.com",
        password: "Giraffe7",
        firstName: "James",
        lastName: "Blunt"
    },
    {
        id:1003,
        email: "hermajesty@champion.net",
        password: "Fandango",
        firstName: "Freddie",
        lastName: "Mercury"
    }
]

export const tests = [
    {
        id: "UST-01.01-01",
        title: "Registration button exists",
        projectID: "UST",
        projectName: "Unit Testing System",
        assignee: "James Blunt",
        status: "Passed",
        description: "Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper nibh justo, at vulputate eros varius sit amet.",
        steps: `<ul><li>Lorem</li><li>Ipsum</li></ul>`,
        data: `<ul><li>Lorem</li><li>Ipsum</li></ul>`,
        acs: ["UTS AC1", "UTS AC3"],
        outcome: ""
    },
    {
        id: "UST-01.01-02",
        title: "Registration button opens page",
        projectID: "UST",
        projectName: "Unit Testing System",
        assignee: "James Blunt",
        status: "Failed",
        description: "Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper nibh justo, at vulputate eros varius sit amet.",
        steps: `<ul><li>Lorem</li><li>Ipsum</li></ul>`,
        data: `<ul><li>Lorem</li><li>Ipsum</li></ul>`,
        acs: ["UTS AC1", "UTS AC3"],
        outcome: ""
    },
    {
        id: "SAH-01.01-01",
        title: "Registration button exists",
        projectID: "SAH",
        projectName: "Savings Account Hub",
        assignee: "Emma Watson",
        status: "To do",
        description: "Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ullamcorper nibh justo, at vulputate eros varius sit amet.",
        steps: `<ul><li>Lorem</li><li>Ipsum</li></ul>`,
        data: `<ul><li>Lorem</li><li>Ipsum</li></ul>`,
        acs: ["SAH AC1", "SAH AC3"],
        outcome: ""
    }
]

export const projects = [
    {
        id: "UTS",
        title: "Unit Testing System",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus nisl purus, vel pretium risus mollis eget. In eleifend aliquet mi, id mattis enim dapibus tincidunt. In ultricies felis dolor, ut mollis purus luctus sed. Aenean fermentum fermentum dictum. Phasellus eu sapien enim. Aenean arcu elit, venenatis sed elementum sed, aliquam ut nunc.",
        deadline: "7 Aug 2024",
        status: "In progress",
        owner: "Harry Styles",
        tests: ["UTS 01.01-01", "UTS 01.01-02", "UTS 01.02-01", "UTS 01.03-01"],
        acs: [
            {
                id: "AC1",
                criteria: "Styling and typography must match designs provided",
                status: "complete"
            },
            {
                id: "AC2",
                criteria: "User must be able to log in securely",
                status: "in-progress"
            },
            {
                id: "AC3",
                criteria: "User dashboard must display all available projects",
                status: "to-do"
            }
        ]
    },
    {
        id: "SAH",
        title: "Savings Account Hub",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus nisl purus, vel pretium risus mollis eget. In eleifend aliquet mi, id mattis enim dapibus tincidunt. In ultricies felis dolor, ut mollis purus luctus sed. Aenean fermentum fermentum dictum. Phasellus eu sapien enim. Aenean arcu elit, venenatis sed elementum sed, aliquam ut nunc.",
        deadline: "11 Apr 2024",
        status: "In Progress",
        owner: "James Blunt",
        tests: ["SAH 01.01-01", "SAH 01.01-02", "SAH 01.02-01", "SAH 01.03-01"],
        acs: [
            {
                id: "AC1",
                criteria: "Styling and typography must match savings hub designs",
                status: "complete"
            },
            {
                id: "AC2",
                criteria: "User must be able to log in securely",
                status: "in-progress"
            },
            {
                id: "AC3",
                criteria: "User dashboard must display all available projects",
                status: "to-do"
            }
        ]
    },
    {
        id: "MRS",
        title: "Mars Rover Spycam",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus nisl purus, vel pretium risus mollis eget. In eleifend aliquet mi, id mattis enim dapibus tincidunt. In ultricies felis dolor, ut mollis purus luctus sed. Aenean fermentum fermentum dictum. Phasellus eu sapien enim. Aenean arcu elit, venenatis sed elementum sed, aliquam ut nunc.",
        deadline: "23 Dec 2037",
        status: "Backlog",
        owner: "Elon Musk",
        tests: ["MRS 01.01-01", "MRS 01.01-02", "MRS 01.02-01", "MRS 01.03-01"],
        acs: [
            {
                id: "AC1",
                criteria: "Samples must be categorised by element type",
                status: "complete"
            },
            {
                id: "AC2",
                criteria: "Life forms must be categorised by colour",
                status: "in-progress"
            },
            {
                id: "AC3",
                criteria: "Temperature must be converted to freedom units",
                status: "to-do"
            }
        ]
    },
    {
        id: "DT1",
        title: "Decision Tree",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam maximus nisl purus, vel pretium risus mollis eget. In eleifend aliquet mi, id mattis enim dapibus tincidunt. In ultricies felis dolor, ut mollis purus luctus sed. Aenean fermentum fermentum dictum. Phasellus eu sapien enim. Aenean arcu elit, venenatis sed elementum sed, aliquam ut nunc.",
        deadline: "1 Feb 2024",
        status: "Complete",
        owner: "Harry Styles",
        tests: ["DT1 01.01-01", "DT1 01.01-02", "DT1 01.02-01", "DT1 01.03-01"],
        acs: [
            {
                id: "AC1",
                criteria: "Styling and typography must match decision tree designs provided",
                status: "complete"
            },
            {
                id: "AC2",
                criteria: "User must be able to answer a series of questions",
                status: "in-progress"
            },
            {
                id: "AC3",
                criteria: "Question cards must stack in mobile",
                status: "to-do"
            }
        ]
    }
]

