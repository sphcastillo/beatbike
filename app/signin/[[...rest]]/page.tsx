import Image from "next/image";
import BeatbikeLogo from "@/images/beatbikeLogo.png";
import BeatbikeBike from "@/images/signIn/beatbikeBike.jpg";
import { proximaNovaRegular, proximaNovaMedium, proximaNovaLight } from "@/app/fonts";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="flex min-h-screen w-full">
        <div className="flex w-full lg:w-[60%] flex-1 flex-col justify-start sm:justify-center p-6 sm:p-12 lg:p-[60px] lg:flex-none">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="flex justify-center">
              <Image
                className="h-[65px] w-auto"
                src={BeatbikeLogo}
                alt="Beatbike Logo"
                width={40}
                height={40}
                priority
              />
            </div>
            <div className="flex justify-center items-center">
              <h2 className={`mt-8 text-2xl leading-9 text-gray-900 ${proximaNovaMedium.className} uppercase`}>
                Sign in to your account
              </h2>
            </div>
            <div className="flex justify-center">
              <p className={`${proximaNovaLight.className} mt-2 text-sm leading-6 text-gray-500`}>
                Not a member?{" "}
                <a href="/signup" className={`${proximaNovaRegular.className} text-gray-800 hover:text-[#B0DB00]`}>
                  Create new account
                </a>
              </p>
            </div>

            <div className="mt-10">
              <SignIn
                routing="path"
                path="/signin"
                signUpUrl="/signup"
                redirectUrl="/dashboard"
                appearance={{
                  elements: {
                    // Remove Clerk framing so it feels like YOUR page
                    rootBox: "w-full",
                    card: "shadow-none border-0 p-12 w-full bg-transparent",
                    header: "hidden",
                    footer: "hidden",

                    // Layout spacing similar to your "space-y-6"
                    form: "space-y-2",

                    // Labels like your original: uppercase + tracking
                    formFieldLabel: `${proximaNovaRegular.className} uppercase tracking-wide block text-sm leading-6 text-gray-900`,

                    // Input like your original: ring-1 gray, neon focus ring
                    formFieldInput:
                      "block w-full rounded-none border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DFFF00] sm:text-sm sm:leading-6",

                    // Clerk wraps inputs; ensure full width
                    formField: "w-full",

                    // Forgot password link
                    formResendCodeLink:
                      `${proximaNovaRegular.className} uppercase text-gray-700 hover:text-[#B0DB00]`,
                    formFieldAction:
                      `${proximaNovaRegular.className} uppercase text-gray-700 hover:text-[#B0DB00]`,

                    // Primary button styled like yours
                    formButtonPrimary:
                      `${proximaNovaRegular.className} uppercase cursor-pointer rounded-md text-[#DFFF00] px-3.5 py-2.5 text-sm shadow-sm hover:bg-[#B0DB00] hover:text-black  w-1/2`,

                    // Optional: make divider + social buttons less prominent (if enabled)

                    dividerText: `${proximaNovaLight.className} text-gray-500`,
                    socialButtonsBlockButton:
                      "w-full rounded-md border border-gray-300 hover:border-gray-400 shadow-sm",
                    socialButtonsBlockButtonText:
                      `${proximaNovaRegular.className} uppercase tracking-wide text-sm text-gray-900`,
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block lg:w-[40%]">
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
  );
}
