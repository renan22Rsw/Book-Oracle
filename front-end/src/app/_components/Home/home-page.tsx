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
          className={`${firaSans.className} text-8xl text-[#141515] text-shadow dark:text-[#EAEBEB] sm:text-6xl`}
        >
          Book{" "}
          <span className="text-[#62EFBE] dark:text-[#109E6C]">Oracle</span>
        </h1>
        <p className={`${firaSansCondensed.className} w-[694px] text-4xl`}>
          A melhor plataforma para você que procura o melhor livro que você
          possa descrever.
        </p>

        <Link href={"/books"}>
          <button className="h-10 w-[150px] rounded-sm bg-[#CFD1EC] font-bold text-[#141515] duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-[#ad9bbe] dark:bg-[#1D2B72] dark:text-[#EAEBEB] dark:hover:shadow-[#0077ba]">
            Começar
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
