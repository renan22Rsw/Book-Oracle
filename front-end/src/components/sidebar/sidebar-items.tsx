import {
  HomeIcon,
  PersonIcon,
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
    item: "About us",
    href: "/about-us",
    icon: <PersonIcon />,
  },

  {
    id: 3,
    item: "Ask the Oracle",
    href: "/oracle/books",
    icon: <MagnifyingGlassIcon />,
  },

  {
    id: 4,
    item: "My list",
    href: "/oracle/list",
    icon: <ClipboardIcon />,
  },

  {
    id: 5,
    item: "Settings",
    href: "/oracle/settings",
    icon: <GearIcon />,
  },
];
