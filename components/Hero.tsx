'use client'
import { notoSans, comfortaa, mulish } from "@/app/fonts";
import { motion } from 'framer-motion';
import { useEffect } from 'react';


function Hero() {
    return (
        <section className="lg:min-h-[85vh]">
            <div className="relative isolate overflow-hidden pt-14 min-h-[65vh] sm:min-h-[75vh] lg:min-h-[85vh]">

                <video autoPlay playsInline loop muted className="absolute inset-0 z-0 h-full w-full object-cover">
                    <source src='/Beatbike.mp4' type="video/mp4" />
                </video>

                <div
                    className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >

                </div>
                <div
                    className="mx-auto max-w-2xl h-full flex flex-col justify-center py-32 sm:py-32 lg:py-40"
                >
                    <div className="mb-8 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.9,
                                ease: "easeOut",
                            }}
                            className={`${mulish.className} relative px-3 py-1 text-4xl sm:text-5xl font-bold leading-6 text-[#DFFF00] tracking-widest text-center`}>
                            RIDE THE SOUND
                        </motion.div>
                    </div>
                    <div className="relative text-center">

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                            className={`${comfortaa.className} text-lg tracking-tight text-white sm:text-2xl text-center`}
                        >
                            Join our beat revolution.
                        </motion.h2>


                        <div
                            className="relative mt-10 flex items-center justify-center gap-x-6"
                        >
                            <div className={mulish.className}>
                                <a
                                    href="/reserve"
                                    className="mt-4 px-3.5 py-2.5 bg-[#DFFF00] font-semibold shadow-sm rounded hover:bg-[#B0DB00] hover:text-white"
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