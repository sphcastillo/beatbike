'use client'
import Image from "next/image";
import studioLife from "@/images/homepage/studioLife.jpg";
import weAreBeatbike from "@/images/homepage/weAreBeatbike.png";
import beatbikeCrew from '@/images/homepage/beatbikeTeam.jpg';
import beatbikeFans from '@/images/homepage/beatbikeFans.jpg';
import happyRider from "@/images/homepage/happyRider.jpg";
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";
import { motion } from 'framer-motion';
const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"]  });
const mulish = Mulish({ subsets: ["latin"] });

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: 300,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  transition: {type: "spring", stiffness: 100, duration: 4 }
};

export default function Introduction() {
    return (
      <div  className={mulish.className}>
        <div className="overflow-hidden bg-white pt-12 sm:pt-24 pb-32 z-200">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-0 sm:gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <motion.div 
                className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8"
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                transition={fadeInAnimationVariants.transition}
                // viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-black">We are Beatbike</h2>
                <p className="text-md mt-6 sm:text-xl leading-8 text-black">
                Welcome to Beatbike, where high-intensity meets low-impact in our invigorating 45-minute indoor cycling sessions led by our energetic instructors. Classes are meticulously crafted to fortify your mind, body, and soul, guided by expert coaches who lead you through dynamic segments of climbs, sprints, choreography, weights, and our iconic soulful moment. Immerse yourself in a transformative experience as you pedal towards holistic well-being in our state-of-the-art studio, surrounded by vibrant lighting and a supportive community. Join us on the journey to elevate your fitness experience with Beatbike.
                </p>
                {/* <p className="mt-6 text-base leading-7 text-white">

                </p> */}
                <div 
                  className="mt-10 flex z-30 justify-center sm:justify-start"
                >
                  <motion.a
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                    href="/reserve"
                    className="cursor-pointer rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm z-100 font-semibold shadow-sm hover:bg-[#B0DB00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Book a Ride
                  </motion.a>
                </div>
              </motion.div>

              <div className="z-0 flex flex-wrap items-start sm:justify-end gap-2 mt-8 sm:mt-0 sm:gap-8 lg:contents">
                <div className="w-0 pl-[78px] flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <Image
                    src={beatbikeFans}
                    alt=""
                    className="aspect-[7/5] w-[18rem] sm:w-[28rem] md:w-[34rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="sm:order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <Image
                      src={studioLife}
                      alt=""
                      className="aspect-[5/6] hidden sm:block sm:w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 pt-3 sm:pt-0 flex-auto justify-center sm:justify-end lg:w-auto lg:flex-none">
                    <Image
                      src={weAreBeatbike}
                      alt=""
                      className="aspect-[7/5] w-[24rem] sm:w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:flex-auto lg:w-auto lg:flex-none">
                    <Image
                      src={happyRider}
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  