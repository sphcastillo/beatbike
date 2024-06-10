
import Image from "next/image";
import { motion } from 'framer-motion';
import { instructors } from "@/data/data";
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"]  });
const mulish = Mulish({ subsets: ["latin"] });

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
  
  export default function Staff() {

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div 
            className="mx-auto max-w-2xl lg:mx-0"
            // variants={fadeInAnimationVariants}
            // initial="initial"
            // whileInView="animate"
            // transition={fadeInAnimationVariants.transition}
            // viewport={{ once: true }}
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
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
          >
            {instructors.map((instructor, i) => (
              <li 
                key={i}
                // whileInView={{ rotate: [0, 360] }}
                // transition={{ duration: 2 }}
                // viewport={{ once: true }}
              >
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  