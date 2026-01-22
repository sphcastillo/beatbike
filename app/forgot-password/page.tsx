import beatbikeLogo from "@/images/beatbikeLogo.png";
import Image from "next/image";
import { proximaNovaRegular, proximaNovaMedium, proximaNovaLight } from "@/app/fonts";

function ForgotPasswordPage() {
  return (
    <div className="py-[72px]">
      <div>
        <Image
          className="mx-auto h-[65px] w-auto"
          src={beatbikeLogo}
          alt="Beatbike Logo"
          width={55}
          height={55}
        />
      </div>
      <div>
        <div className="flex justify-center items-center pt-6">
          <h1 className={`${proximaNovaMedium.className} uppercase text-3xl`}>Forgot Password</h1>
        </div>

        <div className="flex justify-center items-center pb-8 pt-5">
          <h1 className={`${proximaNovaRegular.className} text-lg text-center text-pretty text-gray-600`}>
            Please enter your email address below. We will send you an email
            to reset your password.
          </h1>
        </div>

        <div className="flex justify-center items-center pb-6">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`${proximaNovaLight.className} tracking-wide block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  focus:ring-[#DFFF00] sm:text-sm sm:leading-6`}
            placeholder="you@example.com"
          />
        </div>
        <div className="flex justify-center items-center">
          <button className={`${proximaNovaRegular.className} uppercase cursor-pointer rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm z-100 shadow-sm hover:bg-[#B0DB00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
