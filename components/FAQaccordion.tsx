'use client'
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { proximaNovaRegular, proximaNovaMedium, proximaNovaSemibold } from "@/app/fonts";
import { faqData } from "@/data/faqData";

function FAQaccordion() {
  return (

    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:pb-40">
      <div className="mx-auto max-w-2xl ">
        <h2 className={`${proximaNovaMedium.className} uppercase text-[#DFFF00] text-xl pb-3`}>New Here? Start Here</h2>
        <h1 className={`${proximaNovaRegular.className} uppercase text-3xl md:text-4xl tracking-wide text-gray-900`}>Frequently Asked Questions</h1>
        <div>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">

            {faqData.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-800">
                        <span className={`${proximaNovaMedium.className} uppercase text-base leading-7`}>{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className={`${proximaNovaRegular.className} tracking-wide text-base leading-7 text-gray-600`}>{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>

  )
}

export default FAQaccordion;