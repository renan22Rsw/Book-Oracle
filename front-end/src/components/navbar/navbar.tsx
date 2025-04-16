import Link from "next/link";
import { navbarItems } from "./navbar-items";
import { UserMenu } from "../user-menu/user-menu";

export const NavBar = () => {
  return (
    <nav className="flex w-full items-center justify-between bg-transparent px-4 py-6 font-semibold text-foreground">
      <ul className="flex items-center">
        {navbarItems.map(({ id, item, href }) => (
          <Link key={id} href={href} className="cursor-pointer">
            <li className="px-4">{item}</li>
          </Link>
        ))}
      </ul>
      <UserMenu />
    </nav>
  );
};
