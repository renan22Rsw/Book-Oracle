import Link from "next/link";
import { socialMedias } from "./footer-social-media";

export const Footer = () => {
  return (
    <footer className="flex justify-between bg-[#32367D] py-10 text-white">
      <div className="px-8">
        <h5>© 2025 Book Oracle</h5>
        <span className="font-thin italic">Created by Renan Victor</span>
      </div>
      <div className="flex h-[100px] items-center">
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
