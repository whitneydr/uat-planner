import SideMenu from "../ui/dashboard/sidenav";
import Header from "../ui/dashboard/header";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
      <Header />
      <div className="" style={{display: 'flex'}}>
        
        <div className="">
          <SideMenu />
        </div>
        <div className="">{children}</div>
      </div>
      </>
    );
  }