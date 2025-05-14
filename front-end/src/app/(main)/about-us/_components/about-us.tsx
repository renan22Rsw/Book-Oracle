import { Fira_Sans } from "next/font/google";
import { Fira_Sans_Condensed } from "next/font/google";
import AboutUsImage from "@/public/about-us-page-image.png";

import Image from "next/image";

const firaSans = Fira_Sans({ subsets: ["latin"], weight: "700" });
const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: "300",
});

export const AboutUs = () => {
  return (
    <div
      className="flex h-screen w-full bg-[#D8DBED] dark:bg-[#121427]"
      id="about-us"
    >
      <div className="flex h-[450px] flex-col justify-center px-8 text-[#0f1215] dark:text-[#eaedf0]">
        <h1 className={`${firaSans.className} text-8xl text-shadow`}>
          About us
        </h1>
        <p className={`${firaSansCondensed.className} w-[800px] text-[32px]`}>
          Book Oracle is a platform designed to offer users the best book
          recommendations in a simple and straightforward way, providing top
          results based on your personal description.
        </p>
      </div>
      <div className="flex w-full items-end justify-end">
        <Image
          src={AboutUsImage}
          width={705}
          height={705}
          alt="about-us-page-image"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};
