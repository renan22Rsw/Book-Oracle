import { Button } from "@/components/ui/button";
import Image from "next/image";
import HomeImage from "@/public/home.png";

export const HomePageMobile = () => {
  return (
    <div className="mt-8 flex h-screen items-center md:mt-14">
      <div className="w-full space-y-3 px-6">
        <h1 className="text-shadow-md text-shadow-lg text-6xl font-bold text-[#FF8765] text-shadow">
          Book Oracle
        </h1>
        <Button className="w-[100px] bg-[#A46856] text-sm font-semibold">
          Get Started
        </Button>

        <Image
          src={HomeImage}
          width={393}
          height={393}
          alt="home-image"
          quality={100}
          className="h-[393px] w-[393px] md:h-[600px] md:w-[600px]"
        />
      </div>
    </div>
  );
};
