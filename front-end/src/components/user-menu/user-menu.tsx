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
  UserRound,
  Settings,
  Contrast,
  MoonIcon,
  SunIcon,
  LogOut,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

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
            <Link href={"#"}>
              {" "}
              <Button variant={"link"}>
                <UserRound />
                Profile
              </Button>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            {/* <Settings /> */}
            <Link href={"#"}>
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
                  <Button variant={"ghost"}>
                    <SunIcon />
                    Light
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button variant={"ghost"}>
                    <MoonIcon />
                    Dark
                  </Button>
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
