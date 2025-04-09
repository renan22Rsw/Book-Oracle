"use client";
import { HomePage } from "./_components/Home/home-page";
import { Footer } from "@/components/footer/footer";
import { AboutUs } from "./_components/About-us/about-us";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { HomePageMobile } from "./_components/Home/home-page-mobile";
import { AboutUsMobile } from "./_components/About-us/about-us-mobile";
import { FooterMobile } from "@/components/footer/footer-mobile";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      {isMobile ? (
        <>
          <HomePageMobile />
          <AboutUsMobile />
          <FooterMobile />
        </>
      ) : (
        <>
          <HomePage />
          <AboutUs />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
