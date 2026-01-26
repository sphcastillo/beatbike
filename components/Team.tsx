"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { instructorsData } from "@/data/instructorsData";
import { FaSpotify } from "react-icons/fa";
import { useState } from "react";
import InstructorModal from "./InstructorModal";
import {
  proximaNovaRegular,
  proximaNovaMedium,
  proximaNovaLight,
} from "@/app/fonts";
import type { Instructor } from "@/typings";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Team() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);
  const [isOptimized, setIsOptimized] = useState(true);

  const handleInstructorClick = (instructor: Instructor) => {
    setSelectedInstructor(instructor);
    setModalOpen(true);
  };

  return (
    <div className="bg-white pt-2 pb-24 sm:pt-12 sm:pb-32">
      <div className="mx-auto max-w-6xl px-3 sm:px-6 text-center lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className={`${proximaNovaMedium.className} uppercase text-[#DFFF00] text-xl pb-3`}>
            Beatbike Instructors
          </h2>
          <h1 className={`${proximaNovaRegular.className} uppercase text-3xl md:text-4xl tracking-wide text-black`}>
            Meet Our Team
          </h1>
          <p className={`${proximaNovaLight.className} tracking-wide text-md mt-6 sm:text-xl pt-4 text-gray-500`}>
            Our instructors are the heartbeat of Beatbike. Each one brings unmatched energy, carefully curated playlists, and the motivation to push you past what you thought was possible—every ride, every beat, every time.
          </p>
        </motion.div>


        <motion.ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {instructorsData.map((instructor, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              onClick={() => handleInstructorClick(instructor)}
              className="rounded-2xl bg-black/80 px-8 py-10 cursor-pointer shadow-2xl will-change-transform"
              whileHover={{
                scale: 1.04,
                y: -6,
                boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 28 }}
            >
              <Image
                className="mx-auto h-28 w-28 rounded-full md:h-56 md:w-56"
                src={instructor.imageSrc}
                alt={`${instructor.name} instructor`}
                width={224}
                height={224}
                priority
                unoptimized={!isOptimized}
                onError={() => setIsOptimized(false)}
              />

              <h3 className={`${proximaNovaMedium.className} text-xl uppercase tracking-wider mt-6 leading-7 text-[#DFFF00]`}>
                {instructor.name}
              </h3>

              <p className={`${proximaNovaLight.className} uppercase tracking-wider text-xs leading-6 text-white mt-3`}>
                Music Style
              </p>
              <p className={`${proximaNovaRegular.className} text-xs leading-6 text-[#DFFF00] tracking-wider`}>
                {instructor.musicStyle}
              </p>

              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={instructor.instagramUrl}
                    className="text-[#DFFF00] hover:text-[#B0DB00]"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-instagram"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </motion.li>

                <motion.li whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href={instructor.spotifyUrl}
                    className="text-[#DFFF00]"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="sr-only">Spotify</span>
                    <FaSpotify className="h-6 w-6 text-[#DFFF00] hover:text-[#B0DB00]" />
                  </a>
                </motion.li>
              </ul>
            </motion.li>
          ))}
        </motion.ul>

        {modalOpen && (
          <InstructorModal
            instructor={selectedInstructor}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
}
