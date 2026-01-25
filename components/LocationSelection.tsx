"use client";
import { useState, useTransition } from "react";
import { Radio, RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { proximaNovaMedium, proximaNovaRegular, proximaNovaLight } from "@/app/fonts";
import { useRouter } from "next/navigation";

const locations = [
  {
    id: 1,
    title: "Tarzana",
    href: "/booking/tarzana",
  },
  {
    id: 2,
    title: "Huntington Beach",
    href: "/booking/huntington-beach",
  },
];

export default function LocationSelection() {
  const [selected, setSelected] = useState(locations[0]);
  const [loadingId, setLoadingId] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSelect = (location: (typeof locations)[number]) => {
    setSelected(location);
    setLoadingId(location.id);
    startTransition(() => {
      router.push(location.href);
    });
  };

  return (
    <div className="mt-12 mx-auto w-full">
      <div>
        <div className="w-full flex justify-center">
          <h1 className={`${proximaNovaMedium.className} uppercase text-[#DFFF00] text-2xl leading-6 pb-3 text-center`}>
            Select Your Studio
          </h1>
        </div>
      </div>
      <RadioGroup
        value={selected}
        onChange={setSelected}
        className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4"
      >
        {locations.map((location) => (
          <Radio
            key={location.id}
            value={location}
            disabled={isPending}
            onClick={() => handleSelect(location)}
            className="group relative flex cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-black border-gray-900/30 border-[1px] shadow-lg transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-black data-[checked]:bg-black/10 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60"
          >
            <div className="flex w-full items-center justify-between">
              <h5 className={`${proximaNovaRegular.className} uppercase text-sm text-gray-900`}>
                {location.title}
              </h5>

              {isPending && loadingId === location.id ? (
                <span
                  aria-label="Loading"
                  className="size-6 rounded-full border-2 border-gray-300 border-t-[#DFFF00] animate-spin"
                />
              ) : (
                <CheckCircleIcon className="size-6 fill-[#DFFF00] opacity-0 transition group-data-[checked]:opacity-100" />
              )}
            </div>
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}


