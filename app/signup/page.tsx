import { mulish } from "@/app/fonts";
import BeatbikeLogo from "@/images/beatbikeLogo.png";
import Image from "next/image";
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';


export default function SignUp() {
    return (
        <div className="bg-white">
            <div className={mulish.className}>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <Image
                            className="mx-auto h-[65px] w-auto"
                            src={BeatbikeLogo}
                            alt="Beatbike Logo"
                            width={55}
                            height={55}
                        />
                        <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Create an Account
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-gray-500">
                            Already have an account?{' '}
                            <a href="/signin" className="font-semibold text-[#555555] hover:text-[#B0DB00] underline decoration-[#B0DB00] ">
                                Log in now
                            </a>
                        </p>
                    </div>


                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium leading-5 text-gray-900">
                                    First Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        autoComplete="firstName"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DFFF00] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium leading-5 text-gray-900">
                                    Last Name
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        autoComplete="lastName"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DFFF00] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        // placeholder="you@example.com"
                                        // defaultValue="adamwathan"
                                        // aria-invalid="true"
                                        // aria-describedby="email-error"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DFFF00] sm:text-sm sm:leading-6"
                                    />
                                    {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                                </div> */}
                                </div>
                                {/* <p className="mt-2 text-sm text-red-600" id="email-error">
                                Not a valid email address.
                            </p> */}
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DFFF00] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phoneNumber" className="block text-sm font-medium leading-5 text-gray-900">
                                    Phone Number
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DFFF00] sm:text-sm sm:leading-6"
                                        placeholder="+1 (555) 987-6543"
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500" id="email-description">
                                    By providing your mobile number you agree to receive text messages from Beatbike, its affiliates, and its franchisees. Message & data rates may apply.
                                </p>
                            </div>

                            <div>
                                <label htmlFor="preferredLocation" className="block text-sm font-medium leading-6 text-gray-900">
                                    Preferred Location
                                </label>
                                <select
                                    id="preferredLocation"
                                    name="preferredLocation"
                                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-[#DFFF00] sm:text-sm sm:leading-6"
                                    required
                                >
                                    <option>Tarzana</option>
                                    <option>Huntington Beach</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="birthdate" className="block text-sm font-medium leading-5 text-gray-900">
                                    Birthdate
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="birthdate"
                                        name="birthdate"
                                        type="date"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#DFFF00] sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="pt-3 pb-12">
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#DFFF00] px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm hover:bg-[#B0DB00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFFF00]"
                                >
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}