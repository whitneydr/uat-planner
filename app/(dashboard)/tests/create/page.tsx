import CreateTestForm from "@/app/ui/dashboard/tests/create-test";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create new test",
    description: "Build a new test"
}

export default async function Page() {
    return (
        <>
        <h1>Create New Test</h1>
        <CreateTestForm />
        </>
    )
}