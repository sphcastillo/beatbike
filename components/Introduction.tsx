import Image from "next/image";
import studioLife from "@/images/homepage/studioLife.jpg";
import settingUp from "@/images/homepage/settingUp.jpg";
import weAreBeatbike from "@/images/homepage/weAreBeatbike.png";
import beatbikeCrew from '@/images/homepage/beatbikeTeam.jpg';
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";
import { motion } from 'framer-motion';
const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"]  });
const mulish = Mulish({ subsets: ["latin"] });

export default function Introduction() {
    return (
      <div  className={mulish.className}>
        <div className="overflow-hidden bg-white pt-24 pb-32">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">We are Beatbike</h2>
                <p className="mt-6 text-xl leading-8 text-black">
                  Beatbike is not just your ordinary indoor spin studio  - it&apos;s a dynamic community hub designed to inspire and motivate. With a team of passionate and skilled instructors who curate exhilarating playlists, Beatbike guarantees a ride that pushes you beyond your limits while fostering a sense of camaraderie among its members. Step into our studio, and you&apos;ll find yourself immersed in an electrifying atmosphere where fitness meets fun, and where every pedal stroke propels you closer to your goals.
                </p>
                {/* <p className="mt-6 text-base leading-7 text-white">

                </p> */}
                <div className="mt-10 flex">
                  <a
                    href="#"
                    className="rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-[#39FF14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Join our team
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <Image
                    src={beatbikeCrew}
                    alt=""
                    className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                    <Image
                      src={studioLife}
                      alt=""
                      className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <Image
                      src={weAreBeatbike}
                      alt=""
                      className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <Image
                      src={settingUp}
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
  