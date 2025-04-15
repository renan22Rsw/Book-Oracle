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
    <div className="flex h-screen w-full">
      <div className="flex h-[450px] flex-col justify-center px-8 text-[#141515] dark:text-[#EAEBEB]">
        <h1 className={`${firaSans.className} text-8xl text-shadow`}>
          Sobre nós
        </h1>
        <p className={`${firaSansCondensed.className} w-[800px] text-[32px]`}>
          Book oracle é uma plataforma que visa em oferecer as melhores
          recomendações de livros pro usuário de forma simples e direta,
          provendo os melhores resultados de livros com base na descrição do
          usuário.
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
