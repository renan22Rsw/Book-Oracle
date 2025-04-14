"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { AboutUs } from "./_components/about-us";
import { AboutUsMobile } from "./_components/about-us-mobile";
import { NavBar } from "@/components/navbar/navbar";

const AboutUsPage = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      {isMobile ? (
        <AboutUsMobile />
      ) : (
        <>
          <NavBar />
          <AboutUs />
        </>
      )}
    </>
  );
};

export default AboutUsPage;
