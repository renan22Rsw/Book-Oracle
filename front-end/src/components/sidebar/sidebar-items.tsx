import {
  HomeIcon,
  GearIcon,
  ClipboardIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

interface sideBarItemsTypes {
  id: number;
  item: string;
  href: string;
  icon: React.ReactNode;
}

export const sideBarItemns: sideBarItemsTypes[] = [
  {
    id: 1,
    item: "Home",
    href: "/home",
    icon: <HomeIcon />,
  },

  {
    id: 2,
    item: "Ask the oracle",
    href: "/oracle/ask-oracle",
    icon: <MagnifyingGlassIcon />,
  },

  {
    id: 3,
    item: "My list",
    href: "/oracle/list",
    icon: <ClipboardIcon />,
  },

  {
    id: 4,
    item: "Settings",
    href: "/oracle/settings",
    icon: <GearIcon />,
  },
];
