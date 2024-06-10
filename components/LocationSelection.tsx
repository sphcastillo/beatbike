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
  },
  {
    id: 2,
    title: "Huntington Beach",
  },
];

function LocationSelection() {
  const [selected, setSelected] = useState(locations[0]);
  return (
    <fieldset className="lg:mt-12">
      <div className={notoSans.className}>
        <div className="flex text-center justify-center items-center">
          <label className="text-2xl font-semibold leading-6 text-gray-900 pb-3 text-center">
            Select Your Studio
          </label>
        </div>
      </div>
      <RadioGroup>
        {locations.map((location) => (
          <Radio
            key={location.id}
            value={location}
            className="group relative flex cursor-pointer rounded-lg gap-y-8 bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
          >
            <div className="flex w-full items-center justify-between">
              <div className="text-sm/6">
                <p className="font-semibold text-black">{location.title}</p>
              </div>
              <CheckCircleIcon className="size-6 fill-white opacity-0 transition group-data-[checked]:opacity-100" />
            </div>
          </Radio>
        ))}
      </RadioGroup>
    </fieldset>
  );
}

export default LocationSelection;
