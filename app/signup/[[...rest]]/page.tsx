import { proximaNovaRegular, proximaNovaMedium, proximaNovaLight, proximaNovaThin } from "@/app/fonts";
import BeatbikeLogo from "@/public/images/beatbikeLogo.png";
import Image from "next/image";
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="bg-white min-h-screen">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        className="mx-auto h-[65px] w-auto"
                        src={BeatbikeLogo}
                        alt="Beatbike Logo"
                        width={55}
                        height={55}
                    />
                    <h2 className={`${proximaNovaMedium.className} uppercase mt-5 text-center text-2xl leading-9 text-gray-900`}>
                        Create an Account
                    </h2>
                    <div className="flex justify-center">
                        <p className={`${proximaNovaLight.className} mt-2 text-sm leading-6 text-gray-500`}>
                            Already have an account?{' '}
                            <a href="/signin" className={`${proximaNovaRegular.className} text-[#555555] hover:text-[#B0DB00] underline decoration-[#B0DB00]`}>
                                Log in now
                            </a>
                        </p>
                    </div>

                </div>


                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                    <SignUp
                        routing="path"
                        path="/signup"
                        signInUrl="/signin"
                        appearance={{
                            elements: {
                                card: "shadow-none border-0 p-12 w-full",
                                headerTitle: "hidden",
                                headerSubtitle: "hidden",
                                footer: "hidden",
                                formButtonPrimary:
                                    `${proximaNovaRegular.className} uppercase cursor-pointer rounded-md text-[#DFFF00] px-3.5 py-2.5 text-sm shadow-sm hover:bg-[#B0DB00] hover:text-black  w-1/2 mx-auto`,
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    )
}