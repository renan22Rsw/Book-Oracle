import {
  InstagramLogoIcon,
  GitHubLogoIcon,
  DiscordLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

interface socialMediaIcons {
  id: number;
  icon: React.ReactNode;
  href: string;
}

export const socialMedias: socialMediaIcons[] = [
  {
    id: 1,
    icon: <InstagramLogoIcon />,
    href: "https://www.instagram.com/renan_rsw/",
  },

  {
    id: 2,
    icon: <GitHubLogoIcon />,
    href: "https://github.com/renan22Rsw",
  },

  {
    id: 3,
    icon: <LinkedInLogoIcon />,
    href: "https://www.linkedin.com/in/renan-victor-1a411735b/",
  },

  {
    id: 4,
    icon: <DiscordLogoIcon />,
    href: "https://discord.gg/xwRGAmE9",
  },
];
