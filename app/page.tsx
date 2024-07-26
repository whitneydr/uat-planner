import Image from "next/image";
// import styles from "./page.module.css";
import './globals.css';
import Link from "next/link";

export default function Home() {
  return (
    <main style={{height: '100%', margin: '10% auto'}}>
      <div style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
        <h1 style={{color: "white"}}>Acceptance Testing Planner</h1>
        <p style={{color: "white"}}>Apprenticeship mock project by Whitney.</p>
        <Link href='/projects' title="Project dashboard" className="btn btn-primary">Go to project dashboard</Link>
      </div>
    </main>
  );
}
