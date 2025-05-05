import { Button } from "@/components/ui/button";

interface AuthButtonProps {
  text: string;
  disabled: boolean;
}

const AuthButton = ({ text, disabled }: AuthButtonProps) => {
  return (
    <Button
      className="w-4/5 bg-[#3f4e5a] dark:bg-[#a5b4c0]"
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default AuthButton;
