"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { AboutUs } from "./_components/about-us";
import { AboutUsMobile } from "./_components/about-us-mobile";

const AboutUsPage = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return <>{isMobile ? <AboutUsMobile /> : <AboutUs />}</>;
};

export default AboutUsPage;
