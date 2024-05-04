'use client'
import Image from "next/image"
import bailey from "@/images/instructors/bailey.jpg";
import amanda from "@/images/instructors/amanda.jpg";
import dana from "@/images/instructors/dana.jpg";
import dylan from "@/images/instructors/dylan.jpg";
import jasmine from "@/images/instructors/jasmine.jpg";
import suzy from "@/images/instructors/suzy.jpg";
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";
import { motion } from 'framer-motion';

const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"]  });
const mulish = Mulish({ subsets: ["latin"] });
const people = [
    {
      name: 'Bailey',
      role: 'Spin Instructor',
      imageUrl:
        bailey,
      xUrl: '#',
      instagramUrl: 'https://www.instagram.com/joey_4pawjay?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
    },
    {
        name: 'Amanda',
        role: 'Spin Instructor',
        imageUrl:
          amanda,
        xUrl: '#',
        instagramUrl: 'https://www.instagram.com/joey_4pawjay?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
      },
      {
        name: 'Dana',
        role: 'Spin Instructor',
        imageUrl:
          dana,
        xUrl: '#',
        instagramUrl: 'https://www.instagram.com/joey_4pawjay?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
      },
      {
        name: 'Dylan',
        role: 'Spin Instructor',
        imageUrl:
          dylan,
        xUrl: '#',
        instagramUrl: 'https://www.instagram.com/joey_4pawjay?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
      },
      {
        name: 'Jasmine',
        role: 'Spin Instructor',
        imageUrl:
          jasmine,
        xUrl: '#',
        instagramUrl: 'https://www.instagram.com/joey_4pawjay?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
      },
      {
        name: 'Suzy',
        role: 'Spin Instructor',
        imageUrl:
          suzy,
        xUrl: '#',
        instagramUrl: 'https://www.instagram.com/joey_4pawjay?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
      },
  ]
  
  export default function Team() {
    return (
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <div  className={mulish.className}>
            <motion.div 
              className="mx-auto max-w-2xl"
              initial={{
                y: 500,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}    
            >
              <h2 className="text-3xl font-bold tracking-wider text-white sm:text-4xl">Meet our team</h2>
              <p className="mt-4 text-lg leading-8 tracking-wide text-gray-400">
                We’re a dynamic group of individuals who are passionate about what we do.
              </p>
            </motion.div>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            {people.map((person) => (
              <li key={person.name} className="rounded-2xl bg-[#333333] px-8 py-10">
                <Image className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={person.imageUrl} alt="" width={192} height={192}/>
                <div className={notoSans.className}>
                  <h3 className="mt-6 text-base font-semibold leading-7 tracking-normal text-white">{person.name}</h3>
                </div>
                <div className={notoSans.className}>
                  <p className="text-sm leading-6 text-gray-400 tracking-wide">{person.role}</p>
                </div>
                <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  <motion.li                                
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <a href={person.instagramUrl} className="text-[#DFFF00] hover:text-[#39FF14]">
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
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                      {/* <span className="sr-only">X</span> */}
                      {/* <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg> */}
                    </a>
                  </motion.li>
                  {/* <li>
                    <a href={person.linkedinUrl} className="text-[#DFFF00] hover:text-gray-300">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li> */}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  