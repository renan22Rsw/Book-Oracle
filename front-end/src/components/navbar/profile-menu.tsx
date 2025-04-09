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
import { ProfileIcon } from "./profile-icon";
import { Button } from "../ui/button";
import Link from "next/link";
import { LogOut, MoonIcon, SunIcon } from "lucide-react";

export const ProfileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ProfileIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {/* <User /> */}
            <Link href={"#"}>
              {" "}
              <Button variant={"link"}>Profile</Button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* <Settings /> */}
            <Link href={"#"}>
              {" "}
              <Button variant={"link"}>Settings</Button>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              {/* <ShadowIcon /> */}
              <Button variant={"ghost"}>Theme</Button>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <SunIcon />
                  <Button>Light</Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MoonIcon />
                  <Button>Dark</Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogOut />
          <Button>Log out</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
