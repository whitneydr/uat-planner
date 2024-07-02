import TestList from "@/app/ui/dashboard/tests/test-list";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tests",
    description: "List of tests"
}

export default async function Page() {
    return (
        <>
        <h1>Tests</h1>
        <TestList />
        </>
    )
}