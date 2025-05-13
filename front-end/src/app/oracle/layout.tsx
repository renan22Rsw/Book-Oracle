import { AppSideBar } from "@/components/sidebar/sidebar";
import { SideBarIcon } from "@/components/sidebar/sidebar-trigger";
import { SidebarProvider } from "@/components/ui/sidebar";

const OracleLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSideBar />
      <main className="w-full">
        <SideBarIcon />
        {children}
      </main>
    </SidebarProvider>
  );
};

export default OracleLayout;
