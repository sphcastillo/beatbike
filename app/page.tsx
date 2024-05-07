'use client'
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Introduction from "@/components/Introduction";
import Locations from "@/components/Locations";
import Subscribe from "@/components/Subscribe";
import MobileCarousel from "@/components/MobileCarousel";
import { useEffect, useState } from "react";

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

    return (
      <main className="">
        {isSmallScreen ? <MobileCarousel /> : <Hero />}
        <Introduction />
        <Locations />
        <Team />
        <Subscribe />
      </main>
    );
}
