import Image from "next/image";
import AboutImage from "@/public/about-us.png";

export const AboutUs = () => {
  return (
    <div id="about-us" className="flex justify-between bg-[#00AC93] text-white">
      <div className="space-y-2 px-14 pt-8">
        <h2 className="text-5xl font-bold text-shadow">About us</h2>
        <p className="max-w-[500px]">
          BookOracle is a platform created for book lovers who want to find
          books based on their own words. Here, you describe what you are
          looking, whether it is a feeling, a theme, or a situation. We will
          recommend the perfect book for you. With BookOracle, you no longer
          have to spend hours searching for your next perfect read. Let us do
          the searching for you.
        </p>
      </div>

      <Image
        src={AboutImage}
        width={743}
        height={467}
        alt="home-image"
        quality={100}
        className="h-[467px] w-[743px]"
      />
    </div>
  );
};
