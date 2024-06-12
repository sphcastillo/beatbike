"use client";
import beatbikeLogo from "@/images/beatbikeLogo.png";
import Image from "next/image";
import { Noto_Sans, Comfortaa, Mulish } from "next/font/google";
import { useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const notoSans = Noto_Sans({ subsets: ["latin"] });
const comfortaa = Comfortaa({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });

function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mt-8 mb-12">
      <div>
        <Image
          className="mx-auto h-[65px] w-auto"
          src={beatbikeLogo}
          alt="Beatbike Logo"
          width={55}
          height={55}
        />
      </div>
      <div className={notoSans.className}>
        <div className="flex justify-center items-center pt-4">
          <h1 className="font-bold text-3xl">Reset Password</h1>
        </div>
        <div className={mulish.className}>
          <div className="flex justify-center items-center pb-8 pt-3">
            <h1 className="font-semibold text-lg">
            Enter a new password:
            </h1>
          </div>
        </div>
        <div className="flex justify-center items-center pb-6">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="border px-4 py-2"
            />
            <button
              type="button"
              className="absolute right-2 top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaRegEyeSlash width={6} height={6} />
              ) : (
                <FaEye width={6} height={6} />
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center pb-6">
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="border px-4 py-2"
            />
            <button
              type="button"
              className="absolute right-2 top-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaRegEyeSlash width={6} height={6} />
              ) : (
                <FaEye width={6} height={6} />
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="cursor-pointer rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm z-100 font-semibold shadow-sm hover:bg-[#B0DB00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordPage;
