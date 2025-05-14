"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { HomePageMobile } from "./_components/home-page-mobile";
import { HomePage } from "./_components/home-page";
import { AboutUsMobile } from "../about-us/_components/about-us-mobile";
import { AboutUs } from "../about-us/_components/about-us";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      {isMobile ? (
        <>
          <HomePageMobile />
          <AboutUsMobile />
        </>
      ) : (
        <>
          <HomePage />
          <AboutUs />
        </>
      )}
    </>
  );
};

export default Home;
