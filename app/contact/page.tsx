'use client'
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { proximaNovaLight, proximaNovaRegular, proximaNovaMedium, proximaNovaSemibold } from "@/app/fonts";
import { useState } from "react";

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [delivered, setDelivered] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setDelivered('');

    const response = await fetch('/api/contactMessages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, email, phoneNumber, message }),
    });

    const data = await response.json();

    if (response.ok) {
      setDelivered('Message sent! 🎉');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhoneNumber('');
      setMessage('');
    } else {
      setDelivered(data.error || 'Something went wrong. Please try again.');
    }

  }

  return (
    <div className="relative isolate bg-white">
      <div className="py-6 sm:py-8 px-2 md:px-6">
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-10 sm:pt-24 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
              </svg>
            </div>
            <h2 className={`${proximaNovaMedium.className} uppercase text-[#DFFF00] text-xl pb-3`}>Got questions?</h2>
            <h1 className={`${proximaNovaRegular.className} uppercase text-3xl md:text-4xl tracking-wide text-black`}>Get in touch</h1>

            <p className={`${proximaNovaLight.className} tracking-wide text-md mt-6 sm:text-xl pt-6 text-gray-600`}>
              Got questions, feedback, or just want to say hi? Reach out to us
              at Beatbike! Whether you&apos;re looking to book a class,
              inquire about memberships, or connect with our vibrant
              community, our team is here to assist you. Drop us a line via
              phone, email, or visit us at one of our dynamic locations.
              Let&apos;s pedal towards your fitness goals together!
            </p>

            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              {/* <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  545 Mavis Island
                  <br />
                  Chicago, IL 99191
                </dd>
              </div> */}

              {/* <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div> */}
              <div className="flex gap-x-4 hover:text-gray-900">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400 hover:text-gray-900"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <div>
                    <a
                      className={`${proximaNovaRegular.className} tracking-wide text-md hover:text-gray-900`}
                      href="mailto:info@beatbike.com"
                    >
                      info@beatbike.com
                    </a>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form
          className="px-6 pb-24 sm:pb-32 lg:px-8 lg:pt-16 lg:pb-36"
          onSubmit={handleSubmit}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className={`${proximaNovaMedium.className} uppercase tracking-wide block text-sm leading-6 text-gray-900`}
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className={`${proximaNovaMedium.className} uppercase tracking-wide block text-sm leading-6 text-gray-900`}
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className={`${proximaNovaMedium.className} uppercase tracking-wide block text-sm leading-6 text-gray-900`}
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className={`${proximaNovaMedium.className} uppercase tracking-wider block text-sm leading-6 text-gray-900`}
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className={`${proximaNovaMedium.className} uppercase tracking-wider block text-sm leading-6 text-gray-900`}
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                className={`${proximaNovaRegular.className} uppercase tracking-wide rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-center text-sm text-black shadow-sm hover:bg-[#B0DB00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B0DB00]`}
              >
                Send message
              </button>
            </div>
            {delivered && (
              <p className="mt-4 text-sm leading-6 text-gray-300">{delivered}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
