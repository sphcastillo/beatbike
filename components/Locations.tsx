'use client';
import { motion } from 'framer-motion';
import { proximaNovaMedium, proximaNovaRegular, proximaNovaLight } from "@/app/fonts";
import { useState } from "react";
import { locationsData } from "@/data/locationsData";
import Image from 'next/image';

export default function Locations() {
  const [isOptimized, setIsOptimized] = useState(true);
  return (
    <div className="bg-[#333333] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 overflow-x-hidden">
        <div>
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
            <h2 className={`${proximaNovaMedium.className} uppercase text-[#DFFF00] text-xl pb-3`}>Find Your Space</h2>
            <h1 className={`${proximaNovaRegular.className} uppercase text-3xl md:text-4xl tracking-wide text-white`}>Double the Beat, Double the Thrill</h1>
            <p className={`${proximaNovaLight.className} tracking-wide text-md sm:text-xl mt-6 leading-8 text-gray-300`}>
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
            {locationsData.map((feature) => (
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
                <div>
                  <dt className={`${proximaNovaRegular.className} text-lg uppercase tracking-wider leading-7 text-white text-center pt-4`}>
                  {feature.name}
                  </dt>
                </div>

                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-300">
                  
                    <p className={`${proximaNovaLight.className} tracking-wide text-md mt-6 flex-auto text-center`}>{feature.description}</p>
                  
                  <div>
                    <p className="mt-6 flex justify-center items-center">
                      <motion.a   
                        href={feature.href}
                        className={`${proximaNovaRegular.className} uppercase text-sm text-center leading-6 text-[#DFFF00]`}
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
