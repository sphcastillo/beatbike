'use client';
import tarzana from "@/images/studios/tarzanaStudio.jpg";
import hbStudio from "@/images/studios/hbStudio.png";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { comfortaa, mulish } from "@/app/fonts";
import { useState } from "react";

const features = [
  {
    name: 'Tarzana',
    description:
      'Experience the pulse of our Tarzana studio in Los Angeles, where every ride fuels your energy and community spirit.',
    href: '/studios',
    studioImage: tarzana
  },
  {
    name: 'Huntington Beach',
    description:
      'Dive into the dynamic vibe of our Huntington Beach studio in Orange County, where every pedal stroke propels you closer to your fitness goals.',
    href: '/studios',
    studioImage: hbStudio
  },
]


export default function Locations() {
  const [isOptimized, setIsOptimized] = useState(true);
  return (
    <div className="bg-[#333333] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-x-hidden">
        <div className={mulish.className}>
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0"
            initial={{
              x: 300,
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
                scale: 1,
            }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Double the Beat, Double the Thrill:</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Feel the rhythm and conquer your workout goals at our two vibrant studios. Join us in SF valley or in &quot;Surf City&quot; HB for heart-pumping rides led by our dynamic instructors. Get ready to sweat and groove with Beatbike!
            </p>
          </motion.div>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <motion.dl          
            initial={{
              y: -300,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}             
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex-col flex">

                
                <div 
                  className='flex justify-center'
                >
                  <Image 
                    src={feature.studioImage} 
                    alt="" 
                    className='aspect-[3/2] w-3/5 rounded-2xl object-cover'
                    unoptimized={!isOptimized}
                    onError={() => setIsOptimized(false)}
                  />
                </div>
                <div className={comfortaa.className}>
                  <dt className="text-base font-semibold leading-7 text-white text-center pt-4">
                  {feature.name}
                  </dt>
                </div>

                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <div className={mulish.className}>
                    <p className="flex-auto text-center">{feature.description}</p>
                  </div>
                  <div className={comfortaa.className}>
                    <p className="mt-6 flex justify-center items-center">
                      <motion.a   
                        href={feature.href}
                        className="text-sm font-semibold  text-center leading-6 text-[#DFFF00]"
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                      >
                        Learn more <span aria-hidden="true">→</span>
                      </motion.a>
                    </p>
                  </div>
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  )
}
