import { ReactNode } from "react";

export const SettingsPageContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <div className="px-20 py-10">{children}</div>;
};
