import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import Link from "next/link";
import { sideBarItemns } from "./sidebar-items";
import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import UserMenuIcon from "../user-menu/user-icon";

export const AppSideBar = () => {
  return (
    <Sidebar>
      <SidebarContent className="bg-[#b6b9bc] dark:bg-[#373a3d]">
        <SidebarGroup>
          <SidebarGroupLabel className="py-10">Book Oracle</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sideBarItemns.map(({ id, item, href, icon }) => (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton asChild>
                    <Link href={href}>
                      {icon}
                      <span className="">{item}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#b6b9bc] dark:bg-[#373a3d]">
        <div className="px-2">
          <div className="flex items-center gap-x-2">
            <UserMenuIcon />
            <h4 className="font-bold">User</h4>
          </div>
          <span className="font-light italic">example.gmail.com</span>
        </div>
        <div className="flex items-center gap-5">
          <Button>
            <SunIcon />
          </Button>

          <Button>
            <MoonIcon />
          </Button>
        </div>

        <SidebarMenuButton>Sair</SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
};
