"use client";
import Image from "next/image";
import GoBeatbikeTeam from "@/images/homepage/GoBeatbikeTeam.jpg"
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";
const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });
import LocationSelection from "@/components/LocationSelection";

export default function ReservePage() {

  return (
    <div className="bg-gray">
      <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
          <div className={notoSans.className}>
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Book Your Ride
            </h1>
          </div>
          <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <LocationSelection />
          </div>
          <Image
            src={GoBeatbikeTeam}
            alt="GO Beatbike Team"
            className="mt-10 aspect-[5/3] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            width={600}
            height={470}
          />
        </div>
      </div>
      {/* <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" /> */}
    </div>
  );
}
