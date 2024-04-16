import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Introduction from "@/components/Introduction";
import Motto from "@/components/Motto";
import Newsletter from "@/components/Newsletter";

export default function Home() {
    return (
      <main>
        <Hero />
        <Introduction />
        <Team />
        <Newsletter />
        <Motto />
      </main>
    );
}
