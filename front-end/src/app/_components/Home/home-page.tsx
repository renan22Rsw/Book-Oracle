import { Button } from "@/components/ui/button";
import Image from "next/image";
import HomeImage from "@/public/home.png";

export const HomePage = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="h-[400px] space-y-3 px-14">
        <h1 className="text-shadow-md text-shadow-lg w-full text-8xl font-bold text-[#FF8765] text-shadow">
          Book Oracle
        </h1>

        <Button className="h-[57px] w-[243px] bg-[#A46856] text-[32px] font-semibold">
          Get Started
        </Button>
      </div>

      <Image
        src={HomeImage}
        width={874}
        height={874}
        alt="home-image"
        quality={100}
        className="xl:h-[600px] xl:w-[600px] 2xl:h-[874px] 2xl:w-[874px]"
      />
    </div>
  );
};
