import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Introduction from "@/components/Introduction";
import Motto from "@/components/Motto";
import Newsletter from "@/components/Newsletter";
import Locations from "@/components/Locations";


export default function Home() {
    return (
      <main>
        <Hero />

        <Introduction />
        <Locations />
        <Team />
        <Newsletter />
        <Motto />
      </main>
    );
}
