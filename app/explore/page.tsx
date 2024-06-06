import { CheckCircleIcon } from '@heroicons/react/20/solid';
import beatbikeFriends from "@/images/exploreUs/beatbikeFriendship.jpg";
import highfive from "@/images/exploreUs/highFive.jpg";
import Image from 'next/image';
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";
import FAQaccordion from '@/components/FAQaccordion';
import ExploreHeader from '@/components/ExploreHeader';

const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"]  });
const mulish = Mulish({ subsets: ["latin"] });

const benefits = [
  'Step into our non-competitive sanctuary where each 45-minute session unfolds into a vibrant dance party, igniting sweat and energy.',
  'Immerse yourself in an environment fueled by boundless enthusiasm, unwavering passion, and genuine love for fitness.',
  "Join a thriving community that celebrates each other's successes, united in the pursuit of collective goals.",
  'Experience a shared space brimming with uplifting positive energy, inspiring every member to reach their long-term fitness aspirations.',
  'Let our talented and motivating instructors guide you on your wellness journey, dedicated to your success and support.',
  'Elevate your fitness journey with empowering sessions that cultivate camaraderie, personal growth, and success.',
]

export default function Explore() {
  return (
    <div className="bg-[#333333]">
      <ExploreHeader />
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src={highfive}
              alt="Beatbike team at pier"
            />
            <div className="w-full flex-auto">
              <div className={mulish.className}>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">What Beatbike offers:</h2>
              </div>
              <div className={notoSans.className}>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                Beatbike is not just your ordinary indoor spin studio  - it&apos;s a dynamic community hub designed to inspire and motivate. With a team of passionate and skilled instructors who curate exhilarating playlists, Beatbike guarantees a ride that pushes you beyond your limits while fostering a sense of camaraderie among its members. Step into our studio, and you&apos;ll find yourself immersed in an electrifying atmosphere where fitness meets fun, and where every pedal stroke propels you closer to your goals.
                </p>
              </div>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                    <div className={mulish.className}>
                    {benefit}
                    </div>
                  </li>
                ))}
              </ul>
              <div className={mulish.className}>
                <div className="mt-10 flex">
                  
                  <a href="/reserve" className="text-sm font-semibold leading-6 text-[#DFFF00] hover:text-[#B0DB00]">
                    Book Your Bike Now <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#555555] to-[#DFFF00] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </div>
      <div className='bg-white'>
      <FAQaccordion />
      </div>
    </div>
  )
}
