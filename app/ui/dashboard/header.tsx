'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    let heading;

    // if (pathname.includes('/projects')) {
    //     heading = "Projects"
    // } else if (pathname.includes('/tests')) {
    //     heading = "Tests"
    // } else if (pathname.includes('/reports')) {
    //     heading =  "Reports"
    // } else if (pathname.includes('/help')) {
    //     heading = "Help"
    // } else {
    //     heading = "Dashboard"
    // }

    return (
         <header>
        <div id="logo" className="desktop"><Image src="/next.svg" alt="logo" width={192} height={90} /></div>
        <div className="page-title mobile">
            {/* <h1>{heading}</h1> */}
        </div>
        <div className="create-new">
            <Link className="btn btn-secondary" href="/projects/create">
            + New Project</Link>
            <Link className="btn btn-primary" href="/tests/create">
                + New Test
            </Link>
        </div>
    </header>
    )
}