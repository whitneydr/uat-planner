import { fetchPlannerUsers } from "@/app/lib/data";
import CreateProjectForm from "@/app/ui/dashboard/projects/create-project";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create new project",
    description: "Build a new project"
}

export default async function Page() {
    const plannerUsers = await fetchPlannerUsers();
    
    return (
        <>
        <h1>Create New Project</h1>
        <CreateProjectForm plannerUsers={plannerUsers} />
        </>
    )
}