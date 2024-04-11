import Hero from "@/components/Hero";
import Instructors from "@/components/Instructors";
import Introduction from "@/components/Introduction";
import Motto from "@/components/Motto";
import Newsletter from "@/components/Newsletter";

export default function Home() {
    return (
      <main>
        <Hero />
        <Introduction />
        <Instructors />
        <Newsletter />
        <Motto />
      </main>
    );
}
