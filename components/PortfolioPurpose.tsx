"use client";

import { proximaNovaLight } from "@/app/fonts";
import { usePathname } from "next/navigation";

export default function PortfolioPurpose() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <div className='bg-[#DFFF00] py-1'>
                <div className='flex justify-center items-center'>
            <span className={`${proximaNovaLight.className} text-pretty text-center uppercase text-xs leading-5 text-black`}>Beatbike is a former business and is no longer operating. This project is presented for portfolio purposes only.</span>
        </div>
    </div>
  )
}
