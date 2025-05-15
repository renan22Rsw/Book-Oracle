import Link from "next/link";
import { navbarItems } from "./navbar-items";
import { Button } from "../ui/button";
import { getUserSession } from "@/utils/get-user";
import { UserMenu } from "../user-menu/user-menu";

export const NavBar = async () => {
  const session = await getUserSession();

  return (
    <nav className="hidden w-full items-center justify-between bg-transparent px-4 py-6 font-semibold text-foreground xl:flex">
      <ul className="flex items-center">
        {navbarItems.map(({ id, item, href }) => (
          <Link key={id} href={href} className="cursor-pointer">
            <li className="px-4">{item}</li>
          </Link>
        ))}
      </ul>
      {session ? (
        <UserMenu profileImageUrl={session.profileImageUrl as string} />
      ) : (
        <div className="space-x-4">
          <Link href={"/sign-up"}>
            <Button>Sign up</Button>
          </Link>

          <Link href={"/login"}>
            <Button>Login</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
