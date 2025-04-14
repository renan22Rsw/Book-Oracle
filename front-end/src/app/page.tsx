"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { HomePage } from "./_components/home/home-page";
import { HomePageMobile } from "./_components/home/home-page-mobile";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)");

  return <>{isMobile ? <HomePageMobile /> : <HomePage />}</>;
};

export default Home;
