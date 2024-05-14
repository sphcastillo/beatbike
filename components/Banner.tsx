'use client'
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Mulish } from "next/font/google";
import { useState } from 'react';

const  mulish = Mulish({ subsets: ["latin"] });

export default function Banner() {
const [isVisible, setIsVisible] = useState(true);

const handleDismiss = () => {
    setIsVisible(false);
};

return (
    <>
        {isVisible && (
            <div className={mulish.className}>
                <div className="flex items-center gap-x-6 bg-[#333333] px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
                    <p className="text-sm leading-6 text-white text-center text-pretty">
                        <a href="#">
                            <strong className="font-semibold text-pretty">NEW CLASSES SCHEDULES</strong>
                            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                                <circle cx={1} cy={1} r={1} />
                            </svg>
                            EVERY SUNDAY AT 4:30 PM
                        </a>
                    </p>
                    <div className="flex flex-1 justify-end">
                        <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]" onClick={handleDismiss}>
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        )}
    </>
);
}