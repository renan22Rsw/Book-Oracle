import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import { Settings, Contrast, MoonIcon, SunIcon, Clipboard } from "lucide-react";
import { ThemeButton } from "@/theme/theme-button";

import { LogoutButton } from "./logout-button";
import UserMenuIcon from "./user-icon";

export const UserMenu = ({ profileImageUrl }: { profileImageUrl: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserMenuIcon profileImageUrl={profileImageUrl} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {/* <User /> */}
            <Link href={"/oracle/list"}>
              {" "}
              <Button variant={"link"}>
                <Clipboard />
                My list
              </Button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* <Settings /> */}
            <Link href={"/oracle/settings"}>
              {" "}
              <Button variant={"link"}>
                <Settings />
                Settings
              </Button>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              {/* <ShadowIcon /> */}
              <Button variant={"ghost"}>
                <Contrast />
                Theme
              </Button>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <ThemeButton theme="light" variant="ghost">
                    <SunIcon />
                    Light
                  </ThemeButton>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <ThemeButton theme="dark" variant="ghost">
                    <MoonIcon />
                    Dark
                  </ThemeButton>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
