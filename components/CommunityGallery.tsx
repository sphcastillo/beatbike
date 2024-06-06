import Image from "next/image";
import HighFive from "@/images/Gallery/highFive.jpg";
import settingUp from "@/images/Gallery/settingUp.jpg";
import Hydrate from "@/images/Gallery/HydrateWithBeatbike.png";
import frontDesk from "@/images/Gallery/frontDeskgals.jpg";
import dreamBeatbikeduo from "@/images/Gallery/spencerbrian.jpg";
import getYourBikeNow from "@/images/Gallery/getonthebikeasap.jpg";
import beatbikeBaby from "@/images/Gallery/babyonboard.jpg";
import beatbikeHitsHB from "@/images/Gallery/beatbikeHitsHB.jpg";
import getExcitedForMerch from "@/images/Gallery/jasmineMerch.jpg";
import celebrateBeatbike from '@/images/Gallery/celebrateBeatbike.jpg';
import brianWearingBeatbike from "@/images/Gallery/maleBeatbiker.jpg";
import shoeRentalshere from "@/images/Gallery/shoeRentalshere.jpg";
import bikesAplenty from "@/images/Gallery/bikesAplenty.jpg";


function CommunityGallery() {
  return (
    <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <div>
                    <Image 
                        className="h-auto max-w-full rounded-lg" 
                        src={getYourBikeNow}
                        alt="Book Your Bike Now"
                        width={300}
                        height={600}
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={beatbikeHitsHB} 
                        alt="Beatbike Hits Huntington Beach"
                        width={300}
                        height={300}
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={brianWearingBeatbike}
                        alt="Brian in Beatbike gear"
                        width={300}
                        height={440}
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={getExcitedForMerch} 
                        alt="Get Excited for Merch"
                        width={300}
                        height={545}
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={Hydrate}
                        alt=""
                        width={300}
                        height={600}
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={shoeRentalshere} 
                        alt="shoe rentals here"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={settingUp} 
                        alt="Setting up before class"
                        width={300}
                        height={600}
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={beatbikeBaby} 
                        alt="Baby on Board"
                        width={300}
                        height={570}
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={frontDesk}
                        alt="Front Desk Gals"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={dreamBeatbikeduo}
                        alt="Dream Beatbike Duo"
                        width={300}
                        height={650}
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={celebrateBeatbike}
                        alt="Celebrate Beatbike"
                        width={300}
                        height={600}
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={bikesAplenty}
                        alt="Plenty of Bikes"
                        width={300}
                        height={570}
                    />
                </div>
            </div>
        </div>

    </div>
  )
}

export default CommunityGallery;