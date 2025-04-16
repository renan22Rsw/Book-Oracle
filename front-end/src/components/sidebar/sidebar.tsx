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
import { LogOut } from "lucide-react";

export const AppSideBar = () => {
  return (
    <Sidebar>
      <SidebarContent className="bg-[#E1E5E8] dark:bg-[#14181D]">
        <SidebarGroup>
          <SidebarGroupLabel className="py-10">Book Oracle</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sideBarItemns.map(({ id, item, href, icon }) => (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton asChild>
                    <Link href={href}>
                      {icon}
                      <span className="text-[#0f1215] dark:text-[#eaedf0]">
                        {item}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-[#E1E5E8] dark:bg-[#14181D]">
        <div className="px-2 text-[#0f1215] dark:text-[#eaedf0]">
          <div className="flex items-center gap-x-2">
            <UserMenuIcon />
            <h4 className="font-bold">User</h4>
          </div>
          <span className="font-light italic">example.gmail.com</span>
        </div>
        <div className="flex items-center gap-5">
          <Button className="w-[100px] bg-[#3f4e5a] dark:bg-[#a5b4c0]">
            <SunIcon className="text-[#eaedf0] dark:text-[#0f1215]" />
          </Button>

          <Button className="w-[100px] bg-[#3f4e5a] dark:bg-[#a5b4c0]">
            <MoonIcon className="text-[#eaedf0] dark:text-[#0f1215]" />
          </Button>
        </div>

        <SidebarMenuButton>
          <LogOut />
          Logout
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
};
