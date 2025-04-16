import { Fira_Sans } from "next/font/google";
import { Fira_Sans_Condensed } from "next/font/google";
import HomeImage from "@/public/home-page-image.png";

import Image from "next/image";
import Link from "next/link";

const firaSans = Fira_Sans({ subsets: ["latin"], weight: "700" });

const firaSansCondensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: "300",
});

export const HomePage = () => {
  return (
    <div className="flex h-screen animate-fade-in">
      <div className="flex h-[400px] flex-col justify-center space-y-4 px-8">
        <h1
          className={`${firaSans.className} text-8xl text-[#0f1215] text-shadow dark:text-[#eaedf0] sm:text-6xl`}
        >
          Book{" "}
          <span className="text-[#62EFBE] dark:text-[#109E6C]">Oracle</span>
        </h1>
        <p
          className={`${firaSansCondensed.className} w-[694px] text-4xl text-[#0f1215] dark:text-[#eaedf0]`}
        >
          The ultimate platform for finding the perfect book that fits your
          imagination.
        </p>

        <Link href={"/oracle/ask-oracle"}>
          <button className="h-10 w-[150px] rounded-sm bg-[#3f4e5a] font-bold text-[#eaedf0] duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-[#3f4e5a] dark:bg-[#a5b4c0] dark:text-[#0f1215] dark:hover:shadow-[#a5b4c0]">
            Get Started
          </button>
        </Link>
      </div>
      <div className="flex w-full items-end justify-end">
        <Image
          src={HomeImage}
          width={717}
          height={717}
          alt="home-page-image"
          quality={100}
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </div>
  );
};
