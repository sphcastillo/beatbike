import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Locations from "@/components/Locations";
import Staff from "@/components/Staff";
import Newletter from "@/components/Newsletter";
import CommunityGallery from "@/components/CommunityGallery";

export default function Home() {

    return (
      <main className="">
        <Hero />
        <Introduction />
        <Locations />
        <Staff />
        <CommunityGallery />
        <Newletter />
      </main>
    );
}
