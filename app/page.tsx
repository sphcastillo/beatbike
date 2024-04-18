import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Introduction from "@/components/Introduction";
import Locations from "@/components/Locations";
import Subscribe from "@/components/Subscribe";



export default function Home() {
    return (
      <main>
        <Hero />
        <Introduction />
        <Locations />
        <Team />
        <Subscribe />
      </main>
    );
}
