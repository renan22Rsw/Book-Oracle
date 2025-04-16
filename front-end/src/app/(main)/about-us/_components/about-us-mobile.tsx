import { Fira_Sans } from "next/font/google";
import { Fira_Sans_Condensed } from "next/font/google";

import Image from "next/image";
import AboutUsImage from "@/public/about-us-page-image.png";

const firaSans = Fira_Sans({ subsets: ["latin"], weight: "700" });

const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: "300",
});

export const AboutUsMobile = () => {
  return (
    <div className="flex h-screen items-center">
      <div className="space-y-4 px-8 text-[#0f1215] dark:text-[#eaedf0]">
        <h1
          className={`${firaSans.className} text-4xl text-shadow sm:text-6xl`}
        >
          About us
        </h1>
        <p className={`${firaSansCondensed.className} text-xl`}>
          Book Oracle is a platform designed to offer users the best book
          recommendations in a simple and straightforward way, providing top
          results based on your personal description.
        </p>
        <div className="flex w-full items-center justify-center">
          <Image
            src={AboutUsImage}
            width={430}
            height={430}
            alt="about-us-page-image"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};
