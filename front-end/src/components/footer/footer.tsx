import Link from "next/link";
import { socialMedias } from "./footer-social-media";

export const Footer = () => {
  return (
    <footer className="bg-[#DFE2E5] py-10 text-[#141515] text-shadow dark:bg-[#1A1D20] dark:text-[#EAEBEB] xl:flex xl:justify-between">
      <div className="px-8 text-center">
        <h5>© 2025 Book Oracle</h5>
        <span className="font-thin italic">Created by Renan Victor</span>
      </div>
      <div className="flex h-[100px] items-center justify-center">
        {socialMedias.map(({ id, icon, href }) => (
          <Link key={id} href={href}>
            <svg
              viewBox="0 0 30 30"
              width={"50px"}
              height={"50px"}
              className="cursor-pointer"
            >
              {icon}
            </svg>
          </Link>
        ))}
      </div>
    </footer>
  );
};
