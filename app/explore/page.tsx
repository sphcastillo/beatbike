"use client";
import { useLayoutEffect, useRef } from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

import highfive from "@/images/exploreUs/highFive.jpg";
import Beatbike from "@/images/exploreUs/beatbikeWallpaper.jpeg";
import beatbikeCelebration from "@/images/studios/BeatbikeCelebration.jpg";
import strongerTogether from "@/images/homepage/strongerTogether.png";

import { proximaNovaRegular, proximaNovaMedium, proximaNovaLight } from "@/app/fonts";
import FAQaccordion from "@/components/FAQaccordion";
import { benefits } from "@/data/exploreData";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ExplorePage() {
  const pageRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!pageRef.current) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const animateSection = (selector: string) => {
        const section = document.querySelector(selector);
        if (!section) return;

        const image = section.querySelector("img");
        const textBlock = section.querySelector('[data-animate="text"]');
        const items = section.querySelectorAll('[data-animate="item"]');

        gsap.set([image, textBlock], { autoAlpha: 0, y: 22 });
        if (items?.length) gsap.set(items, { autoAlpha: 0, y: 14 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            end: "bottom 35%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
          defaults: { duration: 0.9, ease: "power2.out" },
        });

        if (image) tl.to(image, { autoAlpha: 1, y: 0 }, 0);
        if (textBlock) tl.to(textBlock, { autoAlpha: 1, y: 0 }, 0.08);

        if (items?.length) {
          tl.to(
            items,
            {
              autoAlpha: 1,
              y: 0,
              stagger: 0.06,
              duration: 0.7,
            },
            0.18
          );
        }
      };

      animateSection("#who-we-are");
      animateSection("#explore-us-1");
      animateSection("#explore-us-2");
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <div className="py-6 sm:py-8 px-6 max-w-7xl mx-auto" />

      <div id="who-we-are" className="relative isolate pb-24 lg:pb-0">
        <div className="mx-auto max-w-7xl pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              className="h-96 w-full flex-none sm:rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
              src={highfive}
              priority
              alt="Beatbike team at pier"
            />

            <div className="w-full flex-auto px-8" data-animate="text">
              <h2 className={`${proximaNovaMedium.className} uppercase text-[#DFFF00] text-xl pb-3`} data-animate="item">
                Who are we?
              </h2>

              <h1
                className={`${proximaNovaRegular.className} uppercase text-3xl md:text-4xl tracking-wide text-black text-pretty`}
                data-animate="item"
              >
                More Than Just a Ride
              </h1>

              <p className={`${proximaNovaLight.className} tracking-wide text-md mt-6 sm:text-xl text-gray-700`} data-animate="item">
                Beatbike is not just your ordinary indoor spin studio — it&apos;s a dynamic community hub designed to inspire
                and motivate. With a team of passionate and skilled instructors who curate exhilarating playlists, Beatbike
                guarantees a ride that pushes you beyond your limits while fostering a sense of camaraderie among its
                members. Step into our studio, and you&apos;ll find yourself immersed in an electrifying atmosphere where
                fitness meets fun, and where every pedal stroke propels you closer to your goals.
              </p>

              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-grey-700 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3" data-animate="item">
                    <CheckCircleIcon className="h-7 w-5 flex-none text-gray-700" aria-hidden="true" />
                    <p className={`${proximaNovaRegular.className} tracking-wide text-base leading-7 text-gray-700`}>{benefit}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex justify-center" data-animate="item">
                <a
                  href="/reserve"
                  className={`${proximaNovaRegular.className} uppercase cursor-pointer rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm z-100 font-semibold shadow-sm hover:bg-[#B0DB00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                >
                  Book Your Bike Now <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="explore-us-1" className="relative isolate bg-[#333333] py-40 sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              className="h-96 w-full flex-none sm:rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-md xl:max-w-lg"
              src={strongerTogether}
              alt="Beatbike community celebrating after class"
            />

            <div className="w-full flex-auto px-8" data-animate="text">
              <h2 className={`${proximaNovaMedium.className} uppercase text-[#DFFF00] text-xl pb-3`} data-animate="item">
                Community
              </h2>

              <h1
                className={`${proximaNovaRegular.className} uppercase text-3xl md:text-4xl tracking-wide text-white text-pretty`}
                data-animate="item"
              >
                Stronger Together
              </h1>

              <p className={`${proximaNovaLight.className} tracking-wide text-md mt-6 sm:text-xl text-white/80`} data-animate="item">
                At the heart of Beatbike is a diverse, inclusive community that moves together. We’re here to lift each
                other up, ride side by side, and create a space where all bodies and all journeys are celebrated. No
                competition—just collective energy and shared momentum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="explore-us-2" className="relative isolate py-40 sm:py-32 lg:py-0">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row-reverse lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Image
              className="h-96 w-full flex-none sm:rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-md xl:max-w-lg"
              src={beatbikeCelebration}
              alt="Beatbike community celebrating after class"
            />

            <div className="w-full flex-auto px-8" data-animate="text">
              <h2 className={`${proximaNovaMedium.className} uppercase text-[#DFFF00] text-xl pb-3`} data-animate="item">
                The Beatbike Experience
              </h2>

              <h1
                className={`${proximaNovaRegular.className} uppercase text-3xl md:text-4xl tracking-wide text-black text-pretty`}
                data-animate="item"
              >
                Ride Together. Celebrate Together.
              </h1>

              <p className={`${proximaNovaLight.className} tracking-wide text-md mt-6 sm:text-xl text-gray-700`} data-animate="item">
                Every Beatbike class is more than a workout — it’s a shared experience. From post-ride celebrations to
                milestones on and off the bike, our studio is built on connection, encouragement, and high-fives that
                never get old.
              </p>
            </div>
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
        <div className="relative z-10 h-full flex items-end px-6 pb-8 max-w-7xl mx-auto" />
      </div>

      <FAQaccordion />
    </div>
  );
}
