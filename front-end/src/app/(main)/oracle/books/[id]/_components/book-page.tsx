import { Button } from "@/components/ui/button";
import Image from "next/image";

export const BookPage = ({ id }: { id: string }) => {
  return (
    <div className="mx-auto h-full max-w-[1000px] rounded-md bg-[#E1E5E8] p-4 dark:bg-[#14181D] xl:my-20 xl:h-auto">
      <div className="xl:flex">
        <div className="flex w-full flex-col items-center space-y-4 md:items-start">
          <Image
            src={"https://avatars.githubusercontent.com/u/178677917?v=4"}
            width={240}
            height={336}
            alt="book-cover"
            className="h-[336px] w-[240px] rounded-md"
          />

          <Button className="mx-4 w-[150px] bg-[#3f4e5a] font-bold dark:bg-[#a5b4c0] xl:duration-300 xl:ease-in-out xl:hover:scale-105">
            Add to list
          </Button>
        </div>
        <div className="space-y-10 px-4 py-6">
          <div>
            <h2 className="text-2xl">Harry Potter e a Pedra Filosofal</h2>
            <span className="text-xs italic">by J.k Rowlling</span>
          </div>
          <div>
            <p className="text-sm">
              Harry Potter é um garoto comum que vive num armário debaixo da
              escada da casa de seus tios. Sua vida muda quando ele é resgatado
              por uma coruja e levado para a Escola de Magia e Bruxaria de
              Hogwarts. Lá ele descobre tudo sobre a misteriosa morte de seus
              pais, aprende a jogar quadribol e enfrenta, num duelo, o cruel
              Voldemort. Com inteligência e criatividade, J. K. Rowling criou um
              clássico de nossos tempos. Uma obra que reúne fantasia e suspense
              num universo original atraente para crianças, adolescentes e
              adultos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
