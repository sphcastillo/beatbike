"use client";

import { useLayoutEffect, useRef } from "react";
import {
  proximaNovaLight,
  proximaNovaMedium,
  proximaNovaRegular,
} from "@/app/fonts";
import { studiosData } from "@/data/studiosData";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const toTelHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export default function Studios() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      const heading = sectionRef.current!.querySelector('[data-animate="heading"]');
      const intro = sectionRef.current!.querySelector('[data-animate="intro"]');
      const cards = gsap.utils.toArray<HTMLElement>('[data-animate="card"]');

      gsap.set([heading, intro], { autoAlpha: 0, y: 18 });
      gsap.set(cards, { autoAlpha: 0, y: 26, scale: 0.98 });

      gsap.to([heading, intro], {
        autoAlpha: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });

      gsap.to(cards, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-white py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-6 sm:py-16 mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:gap-y-10 pt-10 sm:pt-16 lg:grid-cols-3">
            <div className="lg:flex lg:h-full lg:items-center">
              <div>
                <h2
                  data-animate="heading"
                  className={`${proximaNovaMedium.className} uppercase text-3xl tracking-tight text-gray-900`}
                >
                  Locations
                </h2>
                <p
                  data-animate="intro"
                  className={`${proximaNovaLight.className} tracking-wide text-md mt-4 leading-7 text-gray-500`}
                >
                  From the vibrant streets of Southern California, we present two
                  distinct Beatbike sanctuaries, each pulsating with its own
                  energetic vibe. No matter where you call home, there&apos;s a
                  Beatbike locale perfectly suited for your fitness journey.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              {studiosData.map((studio) => (
                <div
                  key={studio.id}
                  data-animate="card"
                  className="group relative shadow-2xl rounded-2xl p-10 overflow-hidden"
                  style={{
                    backgroundImage: `url(${studio.studioImage.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 z-0" />

                  <div className="relative z-10 flex h-full flex-col justify-center pb-6">
                    <div>
                      <h3
                        className={`${proximaNovaMedium.className} text-center text-xl tracking-wider uppercase leading-7 text-white`}
                      >
                        {studio.name}
                      </h3>

                      <address
                        className={`${proximaNovaRegular.className} text-center tracking-wide mt-3 space-y-1 text-white text-md not-italic leading-6`}
                      >
                        <p>{studio.streetAddress}</p>
                        <p>{studio.cityStateZip}</p>
                      </address>

                      <div className="pt-1">
                        <dd
                          className={`${proximaNovaRegular.className} text-center tracking-wide text-white`}
                        >
                          <a className="hover:text-[#DFFF00]" href={toTelHref(studio.phone)}>
                            {studio.phone}
                          </a>
                        </dd>
                      </div>
                    </div>

                    <div className="pt-6 flex justify-center">
                      <a
                        href={`/booking/${studio.slug}`}
                        className={`${proximaNovaRegular.className} uppercase rounded-md bg-[#DFFF00] px-4 py-2.5 text-sm shadow-sm hover:bg-[#B0DB00] transition-transform duration-200 hover:scale-110`}
                      >
                        Reserve
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
