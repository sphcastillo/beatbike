import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Locations from "@/components/Locations";
import Staff from "@/components/Staff";
import Newsletter from "@/components/Newsletter";
import CommunityGallery from "@/components/CommunityGallery";

export default function Home() {
    return (
      <main>
        <Hero />
        <Introduction />
        <Locations />
        <Staff />
        <CommunityGallery />
        <Newsletter />
      </main>
    );
}