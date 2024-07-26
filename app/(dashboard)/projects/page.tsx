import ProjectList from "@/app/ui/dashboard/projects/project-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "List of projects",
};

export default async function Page() {
  return (
    <>
      <h1>Projects</h1>
      <ProjectList />
    </>
  );
}
