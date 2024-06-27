"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideMenu = () => {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <nav className="nav desktop">
      <div className="last-login">
        <strong>Davy Jones</strong>
        <br />
        <span>Last logged in 31 July 2023 at 4.45pm</span>
      </div>
      <div className="navmenu">
        <Link href="/projects" className={pathname.includes('/projects') ? 'active' : ''}>
          <Image src="/icons/Business.svg" width={40} height={40} alt="" />
          Projects
        </Link>
        <Link href="/tests" className={pathname.includes('/tests') ? 'active' : ''}>
          <Image src="/icons/Products.svg" width={40} height={40} alt="" />
          Tests
        </Link>
        <Link href="/reports" className={pathname === '/reports' ? 'active' : ''}>
          <Image src="/icons/News.svg" width={40} height={40} alt="" />
          Reports
        </Link>
        <Link href="/templates" className={pathname === '/templates' ? 'active' : ''}>
          <Image src="/icons/Balance Transfer.svg" width={40} height={40} alt="" />
          Templates
        </Link>
        <Link href="/help-and-support">
          <Image src="/icons/Catalogue.svg" width={40} height={40} alt="" />
          Help and support
        </Link>
        <Link href={"/admin"}>
          <Image src="/icons/Process Central.svg" width={40} height={40} alt="" />
          Administration
        </Link>
        <Link href={"/account"}>
          <Image src="/icons/Lock.svg" width={40} height={40} alt="" />
          Account details
        </Link>
        <Link href={"/log-out"}>
          <Image src="/icons/Exit.svg" width={40} height={40} alt="" />
          Log out
        </Link>
      </div>
    </nav>
  );
};

export default SideMenu;
