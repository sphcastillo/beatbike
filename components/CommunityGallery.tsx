import Image from "next/image";
import HighFive from "@/images/Gallery/highFive.jpg";
import WorkoutBuddies from "@/images/Gallery/workoutBuddies.jpg";
import Hydrate from "@/images/Gallery/HydrateWithBeatbike.png";

function CommunityGallery() {
  return (
    <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
                <div>
                    <Image 
                        className="h-auto max-w-full rounded-lg" 
                        src={HighFive}
                        alt="High Five"
                        width={500}
                        height={500}
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={WorkoutBuddies} 
                        alt="High Five"
                        width={350}
                        height={500}
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={HighFive}
                        alt=""
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={HighFive} 
                        alt=""
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
                        src={HighFive} 
                        alt=""
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={HighFive} 
                        alt=""
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={HighFive} 
                        alt=""
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={HighFive}
                        alt=""
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={HighFive}
                        alt=""
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={HighFive}
                        alt=""
                    />
                </div>
                <div>
                    <Image  
                        className="h-auto max-w-full rounded-lg" 
                        src={HighFive}
                        alt=""
                    />
                </div>
            </div>
        </div>

    </div>
  )
}

export default CommunityGallery;