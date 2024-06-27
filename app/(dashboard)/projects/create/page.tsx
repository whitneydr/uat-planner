import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create new project",
    description: "Build a new project"
}

export default async function Page() {
    return (
        <>
        <h1>Create New Project</h1>
        </>
    )
}