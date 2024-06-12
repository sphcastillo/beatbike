"use client";
import { useState } from "react";
import { Field, Label, Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";
const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

const locations = [
  {
    id: 1,
    title: "Tarzana",
    href: "/tarzana",
  },
  {
    id: 2,
    title: "Huntington Beach",
    href: "/huntington-beach",
  },
];

function LocationSelection() {
  const [selected, setSelected] = useState(locations[0]);
  return (
    <div className="mt-12 mx-auto w-full">
      <div className={notoSans.className}>
        <div className="w-full flex justify-center">
          <h1 className="text-2xl font-semibold leading-6 text-gray-900 pb-3 text-center">
            Select Your Studio
          </h1>
        </div>
      </div>
      <RadioGroup className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        {locations.map((location) => (
          <Radio
            key={location.id}
            value={location}
            className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-black shadow-lg transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-black data-[checked]:bg-black/10"
          >
            <a className="flex w-full items-center justify-between" href={location.href}>
              <div className="text-[15px]">
                <h5 className="font-semibold text-black">{location.title}</h5>
              </div>
              <CheckCircleIcon className="size-6 fill-[#DFFF00] opacity-0 transition group-data-[checked]:opacity-100" />
            </a>
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}

export default LocationSelection;
