'use client'
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { comfortaa, proximaNovaRegular, proximaNovaMedium, proximaNovaSemibold, proximaNovaLight } from "@/app/fonts";
import { motion } from 'framer-motion';


const navigation = [
    { name: 'Explore', href: '/explore' },
    { name: 'Studios', href: '/studios' },
    { name: 'Instructors', href: '/instructors' },
    { name: 'Contact', href: '/contact' },
]


function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-black">
            <nav className="flex items-center p-6 lg:px-8" aria-label="Global">

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

                        <h3 className={`${comfortaa.className} text-white text-[18px]`}>Beatbike</h3>
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
                    className="hidden md:flex md:flex-1 md:justify-end"
                >
                    <div>
                        <div className="hidden md:flex md:gap-x-12">
                            {navigation.map((item) => (
                                <a 
                                    key={item.name} 
                                    href={item.href} 
                                    className={`${proximaNovaRegular.className} uppercase text-sm leading-6 tracking-widest text-white border-b-2 border-transparent hover:border-[#DFFF00] pb-1 transition-colors`}>
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }} href="/signin"
                        className={`${proximaNovaRegular.className} uppercase text-sm leading-6 text-[#DFFF00] tracking-wider ml-6`}
                    >
                        Log in
                    </motion.a>
                </motion.div>

                <div className="flex md:hidden justify-end flex-1">
                    <motion.a
                        href="/signin"
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => { }}
                        onHoverEnd={e => { }}
                        className="text-sm font-semibold leading-6 text-[#DFFF00] tracking-wider ml-6"
                    >
                        Log in
                    </motion.a>
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6 text-[#DFFF00] ml-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#000000] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">

                            <h2 className={`${comfortaa.className} text-white text-2xl`}>Beatbike</h2>

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
                            <div className="space-y-8 py-24">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`${proximaNovaRegular.className} uppercase tracking-widest -mx-3 block text-xl px-3 py-2 leading-7 text-white border-b-2 border-transparent hover:border-[#DFFF00] pb-1 transition-colors`}

                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <div>
                                    <a
                                        href="/signin"
                                        className={`${proximaNovaRegular.className} -mx-3 block rounded-lg px-3 py-2.5 text-xl font-semibold leading-7 text-[#DFFF00]`}
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Header;