'use client'
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
// import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Noto_Sans, Comfortaa } from "next/font/google";
import { motion } from 'framer-motion';

const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"]  });

const navigation = [
    { name: 'Explore', href: '#' },
    { name: 'Studios', href: '#' },
    { name: 'Instructors', href: '#' },
    { name: 'Stay Connected', href: '#' },
  ]
  

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
                <header className="sticky top-0 z-50">
                    <nav className="flex items-center p-6 lg:px-8">

                        <motion.div 
                            className="flex lg:flex-1"
                            initial={{
                                x: 500,
                                opacity: 0,
                                scale: 0.5,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{ duration: 1 }}
                        >
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Beatbike</span>
                                <div className={comfortaa.className}>
                                    <h3 className="text-white text-[18px]">Beatbike</h3>
                                </div>
                            </a>
                        </motion.div>

                        <motion.div 
                            initial={{ 
                                x: -500,
                                opacity: 0,
                                scale: 0.5,
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{ duration: 1.5 }}
                            className="hidden lg:flex lg:flex-1 lg:justify-end"
                        >
                            <div className={notoSans.className}>
                                <div className="hidden lg:flex lg:gap-x-12">
                                    {navigation.map((item) => (
                                    <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 tracking-wider text-white">
                                        {item.name}
                                    </a>
                                    ))}
                                </div>
                            </div>
                            <a href="#" className="text-sm font-semibold leading-6 text-[#DFFF00] tracking-wider ml-6">
                                Log in
                            </a>
                        </motion.div>

                        <div className="flex lg:hidden justify-end flex-1">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6 text-[#DFFF00]" aria-hidden="true" />
                            </button>
                        </div>
                    </nav>

                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#000000] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                            <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <div className={comfortaa.className}>
                                    <h2 className="text-white">Beatbike</h2>
                                </div>
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-[#DFFF00]"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            </div>
                            <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/25">
                                <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                    >
                                    {item.name}
                                    </a>
                                ))}
                                </div>
                                <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                >
                                    Log in
                                </a>
                                </div>
                            </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </header>
    )
}

export default Header;