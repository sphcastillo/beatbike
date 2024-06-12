'use client'
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });


function Hero() {

    // useEffect(() => {
    //     const video = document.createElement('video');
    //     video.src = '/Beatbike.mp4';
    //     video.preload = 'auto';
    //     document.body.appendChild(video);
    
    //     return () => {
    //         document.body.removeChild(video);
    //     };
    // }, []);

    return (
        <section>
            <div className="relative isolate overflow-hidden pt-14">

                <video autoPlay playsInline loop muted className="absolute inset-0 z-0 h-full w-full object-cover">
                    <source src='/Beatbike.mp4' type="video/mp4" />
                </video>

                <div
                    className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >

                </div>
                <div
                    className="mx-auto max-w-2xl py-32 sm:py-32 lg:py-40"
                >
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className={mulish.className}>
                            <div className="relative px-3 py-1 text-xl sm:text-5xl font-bold leading-6 text-[#DFFF00] tracking-widest">
                                RIDE THE SOUND
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className={comfortaa.className}>
                            <h1
                                className="text-4xl tracking-tight text-white sm:text-8xl"
                            >
                                Join our beat revolution
                            </h1>
                        </div>

                        <div
                            className="mt-10 flex items-center justify-center gap-x-6"
                        >
                            <div className={mulish.className}>
                                <a
                                    href="/reserve"
                                    className="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
                                >
                                    Book Your Bike Now
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;