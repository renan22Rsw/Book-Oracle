"use client";

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
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import UserMenuIcon from "../user-menu/user-icon";
import { LogOut } from "lucide-react";
import { ThemeButton } from "@/theme/theme-button";
import axios, { AxiosError } from "axios";
import { ErrorResponse } from "@/types/axios-error";
import { GetUserToken } from "@/hooks/get-user-token";
import { useRouter } from "next/navigation";

export const AppSideBar = () => {
  const { token } = GetUserToken();
  const router = useRouter();

  const logoutUrl = process.env.NEXT_PUBLIC_LOGOUT_URL as string;

  const handleLogout = async () => {
    try {
      await axios.get(logoutUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      router.refresh();
    } catch (err) {
      const error = err as AxiosError<ErrorResponse>;
      if (error.response) {
        throw error.response.data.error;
      } else {
        throw new Error("Something went wrong");
      }
    }
  };

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
            <h4 className="font-bold">Example</h4>
          </div>
          <span className="font-light italic">example@gmail.com</span>
        </div>
        <div className="flex items-center gap-5">
          <ThemeButton
            theme="light"
            className="w-[100px] bg-[#3f4e5a] dark:bg-[#a5b4c0]"
          >
            <SunIcon className="text-[#eaedf0] dark:text-[#0f1215]" />
          </ThemeButton>

          <ThemeButton
            theme="dark"
            className="w-[100px] bg-[#3f4e5a] dark:bg-[#a5b4c0]"
          >
            <MoonIcon className="text-[#eaedf0] dark:text-[#0f1215]" />
          </ThemeButton>
        </div>

        <SidebarMenuButton onClick={handleLogout}>
          <LogOut />
          Logout
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
};
