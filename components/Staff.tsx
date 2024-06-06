import Image from "next/image";
import { motion } from 'framer-motion';
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"]  });
const mulish = Mulish({ subsets: ["latin"] });

import bailey from "@/images/instructors/bailey.jpg";
import amanda from "@/images/instructors/amanda.jpg";
import dana from "@/images/instructors/dana.jpg";
import dylan from "@/images/instructors/dylan.jpg";
import jasmine from "@/images/instructors/jasmine.jpg";
import suzy from "@/images/instructors/suzy.jpg";
import { Instructor } from "@/typings";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {type: "spring", stiffness: 100, duration: 4 }
};


const instructors: Instructor[]= [
    {
      id: 1,
      name: 'Bailey',
      role: 'Spin Instructor',
      imageUrl:
        bailey,
      xUrl: '#',
      instagramUrl: 'https://www.instagram.com/joey_4pawjay?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
    },
    {
        id: 2,
        name: 'Amanda',
        role: 'Spin Instructor',
        imageUrl:
          amanda,
        xUrl: '#',
        instagramUrl: 'https://www.instagram.com/joey_4pawjay?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
      },
      {
        id: 3,
        name: 'Dana',
        role: 'Spin Instructor',
        imageUrl:
          dana,
        xUrl: '#',
        instagramUrl: 'https://www.instagram.com/joey_4pawjay?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
      },
      {
        id: 4,
        name: 'Dylan',
        role: 'Spin Instructor',
        imageUrl:
          dylan,
        xUrl: '#',
        instagramUrl: 'https://www.instagram.com/joey_4pawjay?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
      },
      {
        id: 5,
        name: 'Jasmine',
        role: 'Spin Instructor',
        imageUrl:
          jasmine,
        xUrl: '#',
        instagramUrl: 'https://www.instagram.com/joey_4pawjay?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
      },
      {
        id: 6,
        name: 'Suzy',
        role: 'Spin Instructor',
        imageUrl:
          suzy,
        xUrl: '#',
        instagramUrl: 'https://www.instagram.com/joey_4pawjay?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
      },
  ]


  
  export default function Staff() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            transition={fadeInAnimationVariants.transition}
            viewport={{ once: true }}
          >
            <div className={notoSans.className}>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Ride Leaders: The Beatbike Instructors</h2>
            </div>
            <div className={mulish.className}>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
                best results for our clients.
                </p>
            </div>
          </motion.div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {instructors.map((instructor, i) => (
              <li key={i}>
                <Image 
                    className="mx-auto h-24 w-24 rounded-full" 
                    src={instructor.imageUrl} 
                    alt="Staff member" 
                    width={500}
                    height={500}
                />
                <div className={mulish.className}>
                    <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{instructor.name}</h3>
                </div>
                <div>
                    <p className="text-sm leading-6 text-gray-600">{instructor.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  