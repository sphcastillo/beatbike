import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"]  });
const mulish = Mulish({ subsets: ["latin"] });

export default function Newsletter() {
    return (
      <div className="bg-black py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-[#555555] px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <div className={comfortaa.className}>
              <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Spin & Thrive: The Beatbike Bulletin
              </h2>
            </div>
            <div className={mulish.className}>
              <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-[#DFFF00]">
              Join our newsletter for exclusive updates, special offers, and to stay in the loop with all things Beatbike!
              </p>
            </div>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <div className={mulish.className}>
                <button
                  type="submit"
                  className="flex-none rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm tracking-wide font-semibold text-black shadow-sm hover:bg-[#39FF14] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Notify me
                </button>
              </div>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#39FF14" />
                  <stop offset={1} stopColor="#BFFF00" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    )
  }
  