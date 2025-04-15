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
        <p className={`${firaSansCondensed.className} text-xl`}>
          A melhor plataforma para você que procura o melhor livro que você
          possa descrever.
        </p>

        <div>
          <Link href={"/books"} className="">
            <button className="h-10 w-[100px] rounded-sm bg-[#CFD1EC] font-bold text-[#141515] dark:bg-[#1D2B72] dark:text-[#EAEBEB] dark:hover:shadow-[#0077ba]">
              Começar
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
