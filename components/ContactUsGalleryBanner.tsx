import Image from "next/image";
import weLoveBeatbike from "@/images/studios/weLoveBeatbike.jpg";
import beatbikeCelebration from "@/images/studios/BeatbikeCelebration.jpg";
import comeToOurStudio from "@/images/studios/outsideStudio.png";
import fundraiser from "@/images/studios/fundraiser.jpg";

function ContactUsGalleryBanner() {
  return (
    <div>
      <div className="grid gap-4">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">
        <div className="hidden sm:block w-full h-40 sm:h-46">
            <Image
              className="h-full w-full object-cover rounded-lg "
              src={fundraiser}
              alt="In session"
              width={350}
              height={200}
            />
          </div>
          <div className="hidden md:block w-full h-40 sm:h-46">
            <Image
              className="h-full w-full object-cover  rounded-lg"
              src={beatbikeCelebration}
              alt="Arm wrestling"
              width={350}
              height={200}
            />
          </div>
          <div className="w-full h-40 sm:h-46">
            <Image
              className="h-full w-full object-cover rounded-lg"
              src={weLoveBeatbike}
              alt="Our juice bar"
              width={350}
              height={200}
            />
          </div>
          <div className=" w-full h-40 sm:h-46">
            <Image
              className="h-full w-full object-cover  rounded-lg "
              src={comeToOurStudio}
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

export default ContactUsGalleryBanner;
