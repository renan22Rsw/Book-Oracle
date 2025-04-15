"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";

import { AboutUsMobile } from "./_components/about-us-mobile";
import { AboutUs } from "./_components/about-us";

const AboutUsPage = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return (
    <>
      {isMobile ? (
        <AboutUsMobile />
      ) : (
        <>
          <AboutUs />
        </>
      )}
    </>
  );
};

export default AboutUsPage;
