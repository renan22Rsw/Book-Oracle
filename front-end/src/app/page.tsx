"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HomePage } from "./_components/home/home-page";
import { HomePageMobile } from "./_components/home/home-page-mobile";
import { NavBar } from "@/components/navbar/navbar";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      {isMobile ? (
        <HomePageMobile />
      ) : (
        <>
          <NavBar />
          <HomePage />
        </>
      )}
    </>
  );
};

export default Home;
