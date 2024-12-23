"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { instructors } from "@/data/data";
import { FaSpotify } from "react-icons/fa";
import { useState } from "react";
import InstructorModal from "./InstructorModal";
import { notoSans, mulish } from "@/app/fonts";

export interface Instructor {
  id: number;
  name: string;
  imageUrl: any;
  instagramUrl: string;
  musicStyle: string;
  location1 : string;
  location2: string | null;
  spotifyUrl: string;
  bio: string;
  quote: string;
  favoriteArtist: string;

}

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
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <div className={mulish.className}>
          <motion.div
            className="mx-auto max-w-2xl"
            initial={{
              y: 500,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-wider sm:text-4xl">
              Meet our team
            </h2>
            <p className="mt-4 text-lg leading-8 tracking-wide text-gray-400">
              We’re a dynamic group of individuals who are passionate about what
              we do.
            </p>
          </motion.div>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8 "
        >
          {instructors.map((instructor, index) => (
            
            <li
              className="rounded-2xl bg-black/80  px-8 py-10 cursor-pointer shadow-2xl"
              onClick={() => handleInstructorClick(instructor)}
              key={index}
            >
                <Image
                  className="mx-auto h-28 w-28 rounded-full md:h-56 md:w-56"
                  src={instructor.imageUrl}
                  alt="team member"
                  width={192}
                  height={192}
                  priority
                  unoptimized={!isOptimized}
                  onError={() => setIsOptimized(false)}
                />
                <motion.div
                  className={notoSans.className}
                  initial={{ opacity: 0, y: 500 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.25,
                  }}
                >
                  <h3 className="mt-6 text-[] font-semibold leading-7 tracking-normal text-[#DFFF00]">
                    {instructor.name}
                  </h3>
                </motion.div>
                <motion.div
                  className={notoSans.className}
                  initial={{ opacity: 0, y: 500 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.25,
                  }}
                >
                  <p className="text-xs leading-6 text-white tracking-wide">
                    MUSIC STYLE
                  </p>
                  <p className="text-xs leading-6 text-[#DFFF00] tracking-wide">
                    {instructor.musicStyle}
                  </p>
                </motion.div>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <motion.li
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a
                      href={instructor.instagramUrl}
                      className="text-[#DFFF00] hover:text-[#B0DB00]"
                      target="_blank"
                      rel="noopener noreferrer"
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
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                      {/* <span className="sr-only">X</span> */}
                      {/* <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg> */}
                    </a>
                  </motion.li>
                  <li>
                    <a
                      href={instructor.instagramUrl}
                      className="text-[#DFFF00] hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Spotify</span>
                      <FaSpotify className="h-6 w-6 text-[#DFFF00] hover:text-[#B0DB00]" />
                    </a>
                  </li>
                </ul>
            </li>

          ))}
        </ul>
        {modalOpen && <InstructorModal instructor={selectedInstructor} onClose={() => setModalOpen(false)} />}
      </div>
    </div>
  );
}
