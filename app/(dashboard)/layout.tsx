import SideMenu from "../ui/dashboard/sidenav";
import Header from "../ui/dashboard/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
      <Header />
      <div className="dashboard-body" style={{display: 'flex'}}>
        
        <div className="">
          <SideMenu />
        </div>
        <main>{children}</main>
      </div>
      </>
    );
  }