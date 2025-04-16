import { Button } from "@/components/ui/button";

const AuthButton = ({ label }: { label: string }) => {
  return (
    <Button className="w-4/5 bg-[#3f4e5a] dark:bg-[#a5b4c0]">{label}</Button>
  );
};

export default AuthButton;
