import {
  HomeIcon,
  PersonIcon,
  ReaderIcon,
  GearIcon,
  ClipboardIcon,
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
    href: "/",
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
    item: "Books",
    href: "/books",
    icon: <ReaderIcon />,
  },

  {
    id: 4,
    item: "My list",
    href: "#",
    icon: <ClipboardIcon />,
  },

  {
    id: 5,
    item: "Settings",
    href: "#",
    icon: <GearIcon />,
  },
];
