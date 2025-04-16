import { Fira_Sans } from "next/font/google";
import { Fira_Sans_Condensed } from "next/font/google";

import Image from "next/image";
import HomeImage from "@/public/home-page-image.png";
import Link from "next/link";

const firaSans = Fira_Sans({ subsets: ["latin"], weight: "700" });

const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: "300",
});

export const HomePageMobile = () => {
  return (
    <div className="flex h-screen animate-fade-in items-center">
      <div className="space-y-4 px-8">
        <h1
          className={`${firaSans.className} text-4xl text-[#141515] text-shadow dark:text-[#EAEBEB] sm:text-6xl`}
        >
          Book{" "}
          <span className="text-[#62EFBE] dark:text-[#109E6C]">Oracle</span>
        </h1>
        <p
          className={`${firaSansCondensed.className} text-xl text-[#0f1215] dark:text-[#eaedf0]`}
        >
          The ultimate platform for finding the perfect book that fits your
          imagination.
        </p>

        <div>
          <Link href={"/oracle/ask-oracle"} className="">
            <button className="h-10 w-[100px] rounded-sm bg-[#3f4e5a] font-bold text-[#eaedf0] dark:bg-[#a5b4c0] dark:text-[#0f1215]">
              Get Started
            </button>
          </Link>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src={HomeImage}
            alt="home-page-image"
            width={430}
            height={430}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};
