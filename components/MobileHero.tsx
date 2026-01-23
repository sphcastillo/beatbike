'use client'
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { comfortaa } from "@/app/fonts";
import { heroCarouselImages } from "@/data/MobileHeroData";


Autoplay.globalOptions = { delay: 4000 };

export default function MobileHero() {
    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 2000 }, [
        Autoplay(),
      ]);
    return (
        <div  
            className="overflow-hidden relative cursor-pointer"
            ref={emblaRef}
        >
            <div className='flex relative'>
                {heroCarouselImages.map((image) => (
                    <div 
                    className="flex-full min-w-0"
                    key={image.id}
                    >
                        <Image 
                            alt="Hero Carousel Image"
                            width={1920}
                            height={1080}
                            src={image.src}
                            className='h-[425px]'
                        />

                    </div>
                ))}
            </div>
            <div className='absolute flex justify-center w-full mt-0 top-0 pt-40 left-0 '>
                <div className='text-center'>
                    <div>
                        <div className="relative px-3 py-1 text-lg leading-6 text-[#DFFF00] tracking-widest">
                            RIDE THE SOUND
                        </div>
                    </div>
                    <div className='pt-4'>
                        <div className={comfortaa.className}>
                            <div className='text-4xl tracking-tight text-white'>
                                Join our beat revolution
                            </div>
                        </div>
                    </div>
                    <div className='pt-7'>
                        <div>
                            <a href="/" className="rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm font-semibold tracking-wider shadow-sm hover:bg-[#B0DB00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

