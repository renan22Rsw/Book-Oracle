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
      <SidebarContent className="bg-[#E1E5E8] dark:bg-[#171B1E]">
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
      <SidebarFooter className="bg-[#E1E5E8] dark:bg-[#171B1E]">
        <div className="px-2">
          <div className="flex items-center gap-x-2">
            <UserMenuIcon />
            <h4 className="font-bold">User</h4>
          </div>
          <span className="font-light italic">example.gmail.com</span>
        </div>
        <div className="flex items-center gap-5">
          <Button className="w-[100px] bg-[#CFD1EC] dark:bg-[#1D2B72]">
            <SunIcon className="text-black dark:text-white" />
          </Button>

          <Button className="w-[100px] bg-[#CFD1EC] dark:bg-[#1D2B72]">
            <MoonIcon className="text-black dark:text-white" />
          </Button>
        </div>

        <SidebarMenuButton>Sair</SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
};
