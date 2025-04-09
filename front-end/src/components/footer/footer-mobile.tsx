import Link from "next/link";
import { socialMedias } from "./footer-social-media";

export const FooterMobile = () => {
  return (
    <footer className="flex items-center justify-center bg-[#32367D] py-10 text-white">
      <div className="px-8 text-center">
        <h5>© 2025 Book Oracle</h5>
        <span className="font-thin italic">Created by Renan Victor</span>
        <div className="flex items-center justify-center pt-2">
          {socialMedias.map(({ id, icon, href }) => (
            <Link key={id} href={href}>
              <svg
                viewBox="0 0 35 35"
                width={"50px"}
                height={"50px"}
                className="cursor-pointer"
              >
                {icon}
              </svg>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
