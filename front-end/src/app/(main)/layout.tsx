"use client";

import { NavBar } from "@/components/navbar/navbar";
import { AppSideBar } from "@/components/sidebar/sidebar";
import { SideBarIcon } from "@/components/sidebar/sidebar-trigger";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const pathName = usePathname();

  return (
    <>
      {isMobile ? (
        <SidebarProvider>
          <AppSideBar />
          <main>
            <SideBarIcon />
            {children}
          </main>
        </SidebarProvider>
      ) : (
        <>
          {pathName.includes("/oracle") ? (
            <SidebarProvider>
              <AppSideBar />
              <main>
                <SideBarIcon />
                {children}
              </main>
            </SidebarProvider>
          ) : (
            <main>
              <NavBar />
              {children}
            </main>
          )}
        </>
      )}
    </>
  );
};

export default MainLayout;
