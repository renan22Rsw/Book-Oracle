import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { AuthCardContainer } from "./auth-card-container";
import Link from "next/link";

interface AuthCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  href: string;
  text: string;
}

export const AuthCard = ({
  title,
  description,
  children,
  href,
  text,
}: AuthCardProps) => {
  return (
    <AuthCardContainer>
      <Card className="w-[350px] space-y-2 p-4 dark:bg-[#14181D]">
        <CardTitle className="text-center text-2xl">{title}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
        <CardContent>{children}</CardContent>
        <CardFooter className="flex justify-center">
          <Link href={href} className="italic underline">
            {text}
          </Link>
        </CardFooter>
      </Card>
    </AuthCardContainer>
  );
};
