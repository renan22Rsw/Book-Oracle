import { PencilIcon } from "lucide-react";

interface SettingsPageInputLabelProps {
  htmlLabel: string;
  label: string;
  onClick: () => void;
}

export const SettingsPageInputLabel = ({
  htmlLabel,
  label,
  onClick,
}: SettingsPageInputLabelProps) => {
  return (
    <div className="flex items-center justify-between xl:w-2/4">
      <label htmlFor={htmlLabel}>{label}</label>
      <PencilIcon onClick={onClick} size={16} className="cursor-pointer" />
    </div>
  );
};
