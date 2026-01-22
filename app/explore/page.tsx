import { CheckCircleIcon } from '@heroicons/react/20/solid';
import highfive from "@/images/exploreUs/highFive.jpg";
import Image from 'next/image';
import { proximaNovaRegular, proximaNovaMedium, proximaNovaLight } from "@/app/fonts";
import FAQaccordion from '@/components/FAQaccordion';
import Beatbike from "@/images/exploreUs/beatbikeWallpaper.jpeg";
import beatbikeCelebration from "@/images/studios/BeatbikeCelebration.jpg";
import { benefits } from '@/data/exploreData';


export default function ExplorePage() {
  return (
    <div>
      <div className='py-6 sm:py-8 px-6 max-w-7xl mx-auto'>
      </div>
      <div className="relative isolate">
        <div id='explore-us-1' className="mx-auto max-w-7xl pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              className="h-96 w-full flex-none sm:rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src={highfive}
              priority
              alt="Beatbike team at pier"
            />
            <div className="w-full flex-auto px-8">
              <h2 className={`${proximaNovaMedium.className} uppercase text-[#DFFF00] text-xl pb-3`}>Who are we?</h2>
              <h1 className={`${proximaNovaRegular.className} uppercase text-3xl md:text-4xl tracking-wide text-black text-pretty`}>More Than Just a Ride</h1>
              <p className={`${proximaNovaLight.className} tracking-wide text-md mt-6 sm:text-xl text-gray-700`}>
                Beatbike is not just your ordinary indoor spin studio  - it&apos;s a dynamic community hub designed to inspire and motivate. With a team of passionate and skilled instructors who curate exhilarating playlists, Beatbike guarantees a ride that pushes you beyond your limits while fostering a sense of camaraderie among its members. Step into our studio, and you&apos;ll find yourself immersed in an electrifying atmosphere where fitness meets fun, and where every pedal stroke propels you closer to your goals.
              </p>

              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-grey-700 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon className="h-7 w-5 flex-none text-gray-700" aria-hidden="true" />
                    <p className={`${proximaNovaRegular.className} tracking-wide text-base leading-7 text-gray-700`}>
                      {benefit}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex justify-center">

                <a href="/reserve" className={`${proximaNovaRegular.className} uppercase cursor-pointer rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm z-100 font-semibold shadow-sm hover:bg-[#B0DB00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>
                  Book Your Bike Now <span aria-hidden="true">&rarr;</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div id="explore-us-2" className="relative isolate py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col-reverse gap-16 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">



            <div className="w-full flex-auto px-8">
              <h2 className={`${proximaNovaMedium.className} uppercase text-[#DFFF00] text-xl pb-3`}>
                The Beatbike Experience
              </h2>

              <h1 className={`${proximaNovaRegular.className} uppercase text-3xl md:text-4xl tracking-wide text-black text-pretty`}>
                Ride Together. Celebrate Together.
              </h1>

              <p className={`${proximaNovaLight.className} tracking-wide text-md mt-6 sm:text-xl text-gray-700`}>
                Every Beatbike class is more than a workout — it’s a shared experience.
                From post-ride celebrations to milestones on and off the bike, our studio
                is built on connection, encouragement, and high-fives that never get old.
              </p>
            </div>
            <Image
              className="h-96 w-full flex-none sm:rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-md xl:max-w-lg"
              src={beatbikeCelebration}
              id='explore-us-2-image'
              alt="Beatbike community celebrating after class"
            />

          </div>
        </div>
      </div>
      <div
        className="relative w-full shadow-2xl h-[440px] xl:h-[540px] overflow-hidden"
        style={{
          backgroundImage: `url(${Beatbike.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%", 
          backgroundRepeat: "no-repeat",
        }}
      >

        <div className="absolute inset-0 bg-black/40" />


        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />


        <div className="relative z-10 h-full flex items-end px-6 pb-8 max-w-7xl mx-auto">

        </div>
      </div>

      <FAQaccordion />
    </div>
  )
}
