'use client'
import { useState } from "react";
import { motion } from 'framer-motion';
import { Comfortaa, Mulish } from "next/font/google";
import getUrl from "@/lib/getUrl";
import { Subscriber } from "@/mongodb/models/Subscriber";

const comfortaa = Comfortaa({ subsets: ["latin"]  });
const mulish = Mulish({ subsets: ["latin"] });

export default function Newletter() {
    const [email, setEmail] = useState('');

    const handleSubmitSubscriber = async (event: any) => {
      console.log(" clicked handleSubmitSubscriber");
      event.preventDefault();

      const url = getUrl('/subscribers');

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      })

      if(response.ok){
        console.log("Subscriber added successfully!");
        const data = await response.json() as Subscriber;
        console.log("Subscriber: ", data);
      }else {
        console.error("Failed to add subscriber");
      }

      setEmail('');
    }

    return (
        <div className={mulish.className}>
            {/* <div className="bg-[#333333] py-16 sm:py-24 lg:py-32"> */}
            <div className="bg-black py-16 sm:py-24 lg:py-32">
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">

                <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
                    {/* <h2 className="inline sm:block lg:inline xl:block">Want product news and updates?</h2>{' '} */}
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 6 }}
                        //   viewport={{ once: true }}
                        className="inline sm:block lg:inline xl:block">Subscribe for exclusive updates, special offers, and to stay in the loop with all things Beatbike!</motion.p>
                </div>
                <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
                    <div className="flex gap-x-4">
                    <label htmlFor="email-address" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#DFFF00] sm:text-sm sm:leading-6"
                        placeholder="Enter your email"
                    />
                    <button
                        type="submit"
                        className="flex-none rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-i[#DFFF00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFFF00]"
                    >
                        Subscribe
                    </button>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-gray-300">
                    We care about your data. Read our{' '}
                    <a href="#" className="font-semibold text-white">
                        privacy&nbsp;policy
                    </a>
                    .
                    </p>
                </form>
                </div>
            </div>
    </div>
    )
  }
  