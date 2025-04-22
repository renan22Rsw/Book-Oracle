"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { HTMLAttributes } from "react";

interface ButttonThemeProps {
  theme: string;
  variant?: "default" | "ghost";
  className?: HTMLAttributes<HTMLButtonElement>["className"];
  children: React.ReactNode;
}

export const ThemeButton = ({
  theme,
  children,
  variant,
  className,
}: ButttonThemeProps) => {
  const { setTheme } = useTheme();

  return (
    <Button
      variant={variant}
      onClick={() => setTheme(theme)}
      className={className}
    >
      {children}
    </Button>
  );
};
