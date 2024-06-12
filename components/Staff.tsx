"use client"
import Image from "next/image";
import { motion } from 'framer-motion';
import { instructors } from "@/data/data";
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"]  });
const mulish = Mulish({ subsets: ["latin"] });

  
  export default function Staff() {

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            className="mx-auto max-w-2xl lg:mx-0"
            initial= {
              { opacity: 0, y: 100 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            transition={{type: "spring", stiffness: 100, duration: 4 }}
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
              <motion.li 
                key={i}
                whileInView={{ rotate: [0, 360] }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
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

                {/* <div className={mulish.className}>
                  <div className="my-2">
                    <p className="text-sm text-gray-500">
                      {instructor.location1}

                      {instructor.location2 !== null && (
                        <>
                          <svg
                            viewBox="0 0 2 2"
                            className="mx-2 inline h-0.5 w-0.5 fill-current"
                            aria-hidden="true"
                          >
                            <circle cx={1} cy={1} r={1} />
                          </svg>
                          {instructor.location2}
                        </>
                      )}
                    </p>
                  </div>
                </div> */}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  