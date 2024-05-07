import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Introduction from "@/components/Introduction";
import Locations from "@/components/Locations";
import Subscribe from "@/components/Subscribe";
import MobileCarousel from "@/components/MobileCarousel";

export default function Home() {
    return (
      <main className="">
        {/* <Hero /> */}
        <MobileCarousel />
        <Introduction />
        <Locations />
        <Team />
        <Subscribe />
      </main>
    );
}
