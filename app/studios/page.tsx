"use client";

import {
  proximaNovaLight,
  proximaNovaMedium,
  proximaNovaRegular,
} from "@/app/fonts";
import { motion } from "framer-motion";
import StudioGalleryBanner from "@/components/StudioGalleryBanner";
import { studiosData } from "@/data/studiosData";

const toTelHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export default function Studios() {
  return (
    <div className="bg-white py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <StudioGalleryBanner /> */}

        <div className="py-6 sm:py-16 mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:gap-y-10 pt-10 sm:pt-16 lg:grid-cols-3">
            <div className="lg:flex lg:h-full lg:items-center">
              <div>
                <h2
                  className={`${proximaNovaMedium.className} uppercase text-3xl tracking-tight text-gray-900`}
                >
                  Locations
                </h2>
                <p
                  className={`${proximaNovaLight.className} tracking-wide text-md mt-4 leading-7 text-gray-500`}
                >
                  From the vibrant streets of Southern California, we present two
                  distinct Beatbike sanctuaries, each pulsating with its own
                  energetic vibe. No matter where you call home, there&apos;s a
                  Beatbike locale perfectly suited for your fitness journey.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              {studiosData.map((studio) => (
                <div
                  key={studio.id}
                  className="group relative shadow-2xl rounded-2xl p-10 overflow-hidden"
                  style={{
                    backgroundImage: `url(${studio.studioImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 z-0" />

             ]
                  <div className="relative z-10 flex h-full flex-col justify-center pb-6">
                    <div >
                      <h3
                        className={`${proximaNovaMedium.className} text-center text-xl tracking-wider uppercase leading-7 text-white`}
                      >
                        {studio.name}
                      </h3>

                      <address
                        className={`${proximaNovaRegular.className} text-center tracking-wide mt-3 space-y-1 text-white text-md not-italic leading-6`}
                      >
                        <p>{studio.streetAddress}</p>
                        <p>{studio.cityStateZip}</p>
                      </address>

                      <div className="pt-1">
                        <dd
                          className={`${proximaNovaRegular.className} text-center tracking-wide text-white`}
                        >
                          <a
                            className="hover:text-[#DFFF00]"
                            href={toTelHref(studio.phone)}
                          >
                            {studio.phone}
                          </a>
                        </dd>
                      </div>
                    </div>

                    <div className="pt-6 flex justify-center">
                      <motion.a
                        whileHover={{ scale: 1.15 }}
                        href="/reserve"
                        className={`${proximaNovaRegular.className} uppercase rounded-md bg-[#DFFF00] px-4 py-2.5 text-sm shadow-sm hover:bg-[#B0DB00]`}
                      >
                        Reserve
                      </motion.a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
