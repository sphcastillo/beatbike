import Image from "next/image";
import beatbikeStrong from "@/images/homepage/strongerTogether.png";
import { Comfortaa, Mulish } from "next/font/google";
import getUrl from "@/lib/getUrl";
import { Subscriber } from "@/mongodb/models/Subscriber";
import createSubscriber from "@/actions/createSubscriber";


const comfortaa = Comfortaa({ subsets: ["latin"]  });
const mulish = Mulish({ subsets: ["latin"] });

  
  export default async function Subscribe() {

    const url = getUrl('/subscribers');


    const response  = await fetch(url, {
      next: {
        tags: ['subscribers']
      }
    });

    const subscribers = await response.json() as Subscriber[];
    console.log("Subscribers: ", subscribers);



    return (
        <div className="bg-black py-16 sm:py-24">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32  sm:rounded-3xl">
                    <Image
                    src={beatbikeStrong}
                    alt="Beatbike Strong!"
                    className="absolute inset-0 -z-10 h-full w-full object-center object-cover md:object-center opacity-70"
                    />
                    {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
                    <div
                    className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
                    aria-hidden="true"
                    >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                    </div>
                    <div
                        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
                        aria-hidden="true"
                    >
                    <div
                        className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                    </div>


                        <div className={mulish.className}>
                            <p className="mx-auto mt-2 max-w-xl text-center text-xl leading-8 text-[#DFFF00] px-4 rounded-lg">
                            Subscribe for exclusive updates, special offers, and to stay in the loop with all things Beatbike!
                            </p>
                        </div>
                        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">

                            <form className="mx-auto mt-10 flex max-w-md gap-x-4" action={createSubscriber} >
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="flex-auto rounded-md border-0 bg-[#DFFF00] px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                                    placeholder="Enter your email"
                                />

                                <div className={mulish.className}>
                                    <button

                                    className="flex-none rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm tracking-wide font-semibold text-black shadow-sm hover:bg-[#39FF14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"

                                    >
                                    Notify me
                                    </button>
                                </div>

                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
  } 
  