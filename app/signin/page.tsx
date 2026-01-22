import Image from "next/image";
import BeatbikeLogo from "@/images/beatbikeLogo.png";
import BeatbikeBike from "@/images/signIn/beatbikeBike.jpg";
import { proximaNovaRegular, proximaNovaMedium, proximaNovaLight } from "@/app/fonts";

export default function SignIn() {
  return (
    <div className="bg-white h-full">
      <div className="flex min-h-full w-full">
        <div className="flex w-[60%] flex-1 flex-col justify-start sm:justify-center p-[60px] lg:flex-none">
          <div>
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <Image
                  className="h-[65px] w-auto"
                  src={BeatbikeLogo}
                  alt="Beatbike Logo"
                  width={40}
                  height={40}
                />
                <h2 className={`mt-8 text-2xl leading-9 text-gray-900 ${proximaNovaMedium.className} uppercase`}>
                  Sign in to your account
                </h2>
                <p className={`${proximaNovaLight.className} mt-2 text-sm leading-6 text-gray-500`}>
                  Not a member?{' '}
                  <a href="/signup" className={`${proximaNovaRegular.className} text-gray-800 hover:text-[#B0DB00]`}>
                    Create new account
                  </a>
                </p>
              </div>

              <div className="mt-10">
                <div>
                  <form action="#" method="POST" className="space-y-6">
                    <div>
                      <label htmlFor="email" className={`${proximaNovaRegular.className} uppercase tracking-wide block text-sm leading-6 text-gray-900`}>
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DFFF00] sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="password" className={`${proximaNovaRegular.className} uppercase tracking-wide block text-sm leading-6 text-gray-900`}>
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DFFF00] sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between pb-5">
                      <div className="text-sm leading-6">
                        <a href="/forgot-password" className={`${proximaNovaRegular.className} uppercase text-gray-700 hover:text-[#B0DB00]`}>
                          Forgot password?
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center justify-center">
                      <button
                        type="submit"
                        className={`${proximaNovaRegular.className} uppercase cursor-pointer rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm z-100 font-semibold shadow-sm hover:bg-[#B0DB00]`}
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">

          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={BeatbikeBike}
            alt="Beatbike client"
            width={400}
            height={700}
          />

        </div>
      </div>
    </div>
  )
}
