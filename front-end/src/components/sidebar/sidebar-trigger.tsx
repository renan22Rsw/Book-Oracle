"use client";

import { useSidebar } from "@/components/ui/sidebar";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export function SideBarIcon() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      className="absolute right-0 top-0 m-4 xl:hidden"
      onClick={toggleSidebar}
    >
      <HamburgerMenuIcon />
    </Button>
  );
}
