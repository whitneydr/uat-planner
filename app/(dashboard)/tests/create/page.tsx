import { fetchLatestProjects, fetchPlannerUsers } from "@/app/lib/ProjectData";
import CreateNewTestForm from "@/app/ui/dashboard/tests/create-new-test";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create new test",
    description: "Build a new test"
}

export default async function Page() {
    const projects = await fetchLatestProjects();
    const plannerUsers = await fetchPlannerUsers();
    console.log('Users from create test page', plannerUsers)
    return (
        <>
        <h1>Create New Test</h1>
        <CreateNewTestForm projects={projects} plannerUsers={plannerUsers} />
        </>
    )
}