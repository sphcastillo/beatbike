'use client'
import heroCarousel1 from '@/images/heroCarousel/heroCarousel0.png';
import heroCarousel2 from '@/images/heroCarousel/heroCarousel1.png';
import heroCarousel3 from '@/images/heroCarousel/heroCarousel2.png';
import heroCarousel4 from '@/images/heroCarousel/heroCarousel3.png';
import heroCarousel5 from '@/images/heroCarousel/heroCarousel4.png';
import heroCarousel6 from '@/images/heroCarousel/heroCarousel5.png';
import heroCarousel7 from '@/images/heroCarousel/heroCarousel6.png';
import heroCarousel8 from '@/images/heroCarousel/heroCarousel7.png';
import heroCarousel9 from '@/images/heroCarousel/heroCarousel8.png';
import heroCarousel10 from '@/images/heroCarousel/heroCarousel9.png';
import heroCarousel11 from '@/images/heroCarousel/heroCarousel10.png';
import heroCarousel12 from '@/images/heroCarousel/heroCarousel11.png';
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"]  });
const mulish = Mulish({ subsets: ["latin"] });

const heroCarouselImages = [
    {
        id: 0,
        src: heroCarousel2,
    },
    {
        id: 1,
        src: heroCarousel1,
    },
    {
        id: 2,
        src: heroCarousel3,
    },
    {
        id: 3,
        src: heroCarousel4,
    },
    {
        id: 4,
        src: heroCarousel5,
    },
    {
        id: 5,
        src: heroCarousel6,
    },
    {
        id: 6,
        src: heroCarousel7,
    },
    {
        id: 7,
        src: heroCarousel8,
    },
    {
        id: 8,
        src: heroCarousel9,
    },
    {
        id: 9,
        src: heroCarousel10,
    },
    {
        id: 10,
        src: heroCarousel11,
    },
    {
        id: 11,
        src: heroCarousel12,
    },
]

Autoplay.globalOptions = { delay: 4000 };

function MobileCarousel() {
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
                    <div className={mulish.className}>
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
                        <div className={mulish.className}>
                            <a href="/" className="rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm font-semibold tracking-wider shadow-sm hover:bg-[#39FF14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">
                                Get started
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileCarousel;
