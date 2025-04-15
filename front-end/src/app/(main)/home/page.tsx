"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { HomePageMobile } from "./_components/home-page-mobile";
import { HomePage } from "./_components/home-page";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      {isMobile ? (
        <HomePageMobile />
      ) : (
        <>
          <HomePage />
        </>
      )}
    </>
  );
};

export default Home;
