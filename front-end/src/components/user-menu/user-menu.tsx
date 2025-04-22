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
import {
  Settings,
  Contrast,
  MoonIcon,
  SunIcon,
  LogOut,
  Clipboard,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ThemeButton } from "@/theme/theme-button";

export const UserMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://avatars.githubusercontent.com/u/178677917?v=4" />
          <AvatarFallback>User picture</AvatarFallback>
        </Avatar>
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
          <Button variant={"ghost"}>
            <LogOut />
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
