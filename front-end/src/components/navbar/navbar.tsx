import Link from "next/link";
import { navbarItems } from "./navbar-items";
import { ProfileMenu } from "./profile-menu";

export const NavBar = () => {
  return (
    <nav className="flex w-full items-center justify-between bg-transparent px-6 py-6 font-semibold text-foreground">
      <div>Logo</div>
      <ul className="flex items-center space-x-6">
        {navbarItems.map(({ id, item, href }) => (
          <Link key={id} href={href} className="cursor-pointer">
            <li>{item}</li>
          </Link>
        ))}
        <ProfileMenu />
      </ul>
    </nav>
  );
};
