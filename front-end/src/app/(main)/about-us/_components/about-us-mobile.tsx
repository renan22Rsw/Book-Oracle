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
      <div className="space-y-4 px-8">
        <h1
          className={`${firaSans.className} text-4xl text-shadow dark:text-[#EAEBEB] sm:text-6xl`}
        >
          Sobre nós
        </h1>
        <p className={`${firaSansCondensed.className} text-xl`}>
          Book oracle é uma plataforma que visa em oferecer as melhores
          recomendações de livros pro usuário de forma simples e direta,
          provendo os melhores resultados de livros com base na descrição do
          usuário.
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
