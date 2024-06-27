import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tests",
    description: "List of tests"
}

export default async function Page() {
    return (
        <>
        <h1>Tests</h1>
        </>
    )
}