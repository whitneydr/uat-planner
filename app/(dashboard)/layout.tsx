import SideMenu from "../ui/dashboard/sidenav";
import Header from "../ui/dashboard/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
      <Header />
      <div className="dashboard-body">
        

          <SideMenu />

        <main>{children}</main>
      </div>
      </>
    );
  }