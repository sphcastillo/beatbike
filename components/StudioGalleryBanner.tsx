import Image from "next/image";
import ourStudio from "@/images/studios/ourStudio.jpg";
import armWrestle from "@/images/studios/armWrestle.jpg";
import beatbikeBanner from "@/images/studios/beatbikeBanner.jpg";
import strongerTogether from '@/images/homepage/strongerTogether.png';

function StudioGalleryBanner() {
  return (
    <div>
      <div className="grid gap-4">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4">

          <div className="hidden md:block w-full h-40 sm:h-46">
            <Image
              className="h-full w-full object-cover  rounded-lg"
              src={armWrestle}
              alt="Arm wrestling"
              width={350}
              height={200}
            />
          </div>
          <div className="w-full h-40 sm:h-46">
            <Image
              className="h-full w-full object-cover rounded-lg"
              src={ourStudio}
              alt="Our juice bar"
              width={350}
              height={200}
            />
          </div>
          <div className=" w-full h-40 sm:h-46">
            <Image
              className="h-full w-full object-cover  rounded-lg "
              src={strongerTogether}
              alt="Stronger Together"
              width={350}
              height={200}
            />
          </div>
          <div className="hidden sm:block w-full h-40 sm:h-46">
            <Image
              className="h-full w-full object-cover  rounded-lg "
              src={beatbikeBanner}
              alt="In session"
              width={350}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudioGalleryBanner;
