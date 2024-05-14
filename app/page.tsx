'use client'
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Locations from "@/components/Locations";
import MobileCarousel from "@/components/MobileCarousel";
import { useEffect, useState } from "react";
import Staff from "@/components/Staff";
import Newletter from "@/components/Newsletter";

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
        {/* {isSmallScreen ? <MobileCarousel /> : <Hero />} */}
        <Hero />
        <Introduction />
        <Locations />
        <Staff />
        <Newletter />
      </main>
    );
}
