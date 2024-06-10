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
    <div className="w-full mx-auto pb-4">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className={notoSans.className}>
            <div className="flex justify-center">
              <h1 className="max-w-2xl text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Book Your Ride
              </h1>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 xl:col-end-1 xl:row-start-1">
            <LocationSelection />
          </div>
          <div className="flex items-center justify-center">
          <Image
            src={GoBeatbikeTeam}
            alt="GO Beatbike Team"
            priority
            className="mt-10 aspect-[5/3] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-16  xl:mt-20"
            width={600}
            height={470}
          />
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  );
}
