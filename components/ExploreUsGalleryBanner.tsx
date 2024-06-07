import Image from "next/image";
import highFive from "@/images/exploreUs/highFive.jpg";
import Beatbike from "@/images/exploreUs/beatbikeWallpaper.jpeg";
import dreamteam from "@/images/exploreUs/theBeatbikeDreamTeam.jpg";
import ridewithUs from "@/images/exploreUs/RideWithUs.jpg";
import femaleSquad from "@/images/exploreUs/futureIsFemale.jpg"

function ExploreUsGalleryBanner() {
  return (
    <div>
      <div className="grid gap-4">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
          <div className="sm:block w-full h-40 sm:h-46">
            <Image
              className="h-full w-full object-cover  rounded-lg"
              src={femaleSquad}
              alt="Arm wrestling"
              width={350}
              height={200}
            />
          </div>
          <div className="hidden md:block w-full h-40 sm:h-46">
            <Image
              className="h-full w-full object-cover rounded-lg "
              src={dreamteam}
              alt="In session"
              width={350}
              height={200}
            />
          </div>
          <div className="w-full h-40 sm:h-46">
            <Image
              className="h-full w-full object-cover rounded-lg"
              src={Beatbike}
              alt="Our juice bar"
              width={350}
              height={200}
            />
          </div>
          <div className=" w-full h-40 sm:h-46 hidden sm:block">
            <Image
              className="h-full w-full object-cover rounded-lg "
              src={ridewithUs}
              alt="Stronger Together"
              width={350}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreUsGalleryBanner;
