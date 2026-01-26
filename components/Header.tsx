'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, Squares2X2Icon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import {
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';

import {
    comfortaa,
    proximaNovaRegular,
} from "@/app/fonts";

const navigation = [
    { name: 'Explore', href: '/explore' },
    { name: 'Studios', href: '/studios' },
    { name: 'Instructors', href: '/instructors' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-black">
            <nav className="flex items-center p-6 lg:px-8">

                <motion.div
                    className="flex flex-1"
                    initial={{ x: 500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Beatbike</span>
                        <h3 className={`${comfortaa.className} text-white text-[18px]`}>
                            Beatbike
                        </h3>
                    </a>
                </motion.div>

                <motion.div
                    initial={{ x: -500, opacity: 0, scale: 0.5 }}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="hidden md:flex md:flex-1 md:items-center md:justify-end gap-x-12"
                >
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`${proximaNovaRegular.className} uppercase text-sm tracking-widest text-white border-b-2 border-transparent hover:border-[#DFFF00] pb-1 transition-colors`}
                        >
                            {item.name}
                        </a>
                    ))}

                    <div className="ml-6 flex items-center">
                        <SignedOut>
                            <motion.a
                                href="/signin"
                                whileHover={{ scale: 1.2 }}
                                className={`${proximaNovaRegular.className} whitespace-nowrap uppercase text-sm text-[#DFFF00] tracking-wider`}
                            >
                                Log in
                            </motion.a>
                        </SignedOut>

                        <SignedIn>
                            <UserButton
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: "h-8 w-8",
                                    },
                                }}
                            />
                        </SignedIn>
                    </div>
                </motion.div>

                <div className="flex md:hidden items-center gap-4">
                    <SignedOut>
                        <motion.a
                            href="/signin"
                            whileHover={{ scale: 1.2 }}
                            className="text-sm font-semibold text-[#DFFF00] tracking-wider"
                        >
                            Log in
                        </motion.a>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    userButtonAvatarBox: "h-8 w-8",
                                },
                            }}
                        >
                            <UserButton.MenuItems>
                                <UserButton.Link
                                    label="Dashboard"
                                    href="/dashboard"
                                    labelIcon={<Squares2X2Icon className="h-4 w-4" />}
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                    </SignedIn>

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#DFFF00]"
                    >
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                </div>
            </nav>


            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm">

                    <div className="flex items-center justify-between">
                        <h2 className={`${comfortaa.className} text-white text-2xl`}>
                            Beatbike
                        </h2>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-[#DFFF00]"
                        >
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="mt-10 space-y-8">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block"
                            >
                                <span
                                    className={`${proximaNovaRegular.className}
                                    inline-block uppercase text-xl tracking-widest text-white
                                    border-b border-transparent
                                    hover:border-[#DFFF00]
                                    pb-1 transition-colors`}
                                >
                                    {item.name}
                                </span>
                            </a>
                        ))}

                    </div>

                    <div className="mt-12">
                        <SignedOut>
                            <a
                                href="/signin"
                                className={`${proximaNovaRegular.className} block text-xl font-semibold text-[#DFFF00]`}
                            >
                                Log in
                            </a>
                        </SignedOut>

                        <SignedIn>
                            <div className="mt-4 flex w-full items-center justify-between gap-4">
                                <UserButton
                                    appearance={{
                                        elements: {
                                            userButtonAvatarBox: "h-9 w-9",
                                        },
                                    }}
                                />
                                <a
                                    href="/dashboard"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`${proximaNovaRegular.className} whitespace-nowrap uppercase text-sm tracking-widest text-[#DFFF00] border-b border-transparent hover:border-[#DFFF00] pb-1 transition-colors`}
                                >
                                    View my account
                                </a>
                            </div>
                        </SignedIn>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
