import { PencilIcon } from "lucide-react";

interface SettingsPageInputLabelProps {
  label: string;
  onClick: () => void;
}

export const SettingsPageInputLabel = ({
  label,
  onClick,
}: SettingsPageInputLabelProps) => {
  return (
    <div className="flex items-center justify-between xl:w-2/4">
      <label>{label}</label>
      <PencilIcon onClick={onClick} size={16} className="cursor-pointer" />
    </div>
  );
};
