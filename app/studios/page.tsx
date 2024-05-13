'use client'
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"]  });
const mulish = Mulish({ subsets: ["latin"] });
import { motion } from 'framer-motion';

export default function Studios() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
            <div className={mulish.className}>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Locations</h2>
              <p className="mt-4 leading-7 text-gray-600">
              From the vibrant streets of Southern California, we present two distinct Beatbike sanctuaries, each pulsating with its own energetic vibe. No matter where you call home, there&apos;s a Beatbike locale perfectly suited for your fitness journey.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className={notoSans.className}>
              <div className="rounded-2xl bg-[#555555] p-10">
                <h3 className="text-md font-semibold leading-7 text-white">Tarzana</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6 ">
                  <p className="text-white">18700 Ventura Blvd</p>
                  <p className="text-white">Tarzana, CA 91356</p>
                </address>
                <div className="pt-1">
                    <dt className="sr-only">Phone Number</dt>
                    <dd className="font-semibold text-white">
                      <a 
                        className="hover:text-[#DFFF00]" 
                        href="tel:+1 (818) 342-6030 ">
                          +1 (818) 342-6030 
                        </a>
                      
                    </dd>
                </div>
                <div 
                  className="mt-10 flex z-30"
                >
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    href="/reserve"
                    className="cursor-pointer rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm z-100 font-semibold shadow-sm hover:bg-[#B0DB00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFFF00]"
                  >
                    Reserve
                  </motion.a>
                </div>
              </div>
              </div>
              
              <div className="rounded-2xl bg-[#555555] p-10">
                <h3 className="text-md font-semibold leading-7 text-white">Huntington Beach</h3>
                <address className="mt-3 space-y-1 text-sm not-italic leading-6">
                  <p className="text-white">7454 Edinger Ave</p>
                  <p className="text-white">Huntington Beach, CA 92647</p>
                </address>
                <div className="pt-1">
                <dt className="sr-only">Phone Number</dt>
                    <dd className="font-semibold text-white">
                      <a 
                        className="hover:text-[#DFFF00]" 
                        href="tel:+1 (714) 375-8777"
                      >
                        +1 (714) 375-8777
                      </a>
                    </dd>
                </div>
                <div 
                  className="mt-10 flex z-30"
                >
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    href="/reserve"
                    className="cursor-pointer rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm z-100 font-semibold shadow-sm hover:bg-[#B0DB00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFFF00]"
                  >
                    Reserve
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}