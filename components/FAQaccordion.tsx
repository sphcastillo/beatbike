'use client'
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import {  mulish } from "@/app/fonts";

const faqs = [
  {
    id: 1,
    question: "What should I expect in a class from Beatbike?",
    answer:
      "Our classes are a heart-pounding, full-body dance party on a bike! Classes are 45 minutes long. Be prepared to sweat!",
  },
  {
    id: 2,
    question: "How old do I have to be to ride?",
    answer:
      "Our minimum age is 13 years old and you must be 4' 11 tall at a minimum. If you are under age 18, you may not ride unless a parent or guardian signs a waiver for you in person. Parents: please note that music played by instructors in classes may contain profanity. If you are uncomfortable with this, please check in with our front desk staff so they may help you choose the right instructor for your minor.",
  },
  {
    id: 3,
    question: "I'm new to indoor cycling. Will someone help me set up?",
    answer:
      "Absolutely! We ask that all new riders arrive no later than 20 minutes before their first class. We want to make sure we can show you around and get you set up properly and for a safe ride.",
  },
  {
    id: 4,
    question: "Are the classes for all levels?",
    answer:
      "Yes! We are here to push you, but we also encourage you to listen to your body when you ride at Beatbike. If you are unable to do a certain move, donU+2019t do it! If you need a break, take it! It is always a good idea to consult with a medical professional before starting a new workout routine.",
  },
  {
    id: 5,
    question: "What if I'm running late? Will you still hold my bike?",
    answer:
      "Yes! But please note that we release bikes EXACTLY 2 minutes prior to the start of class. If you are running late, give us a call to assure we hold your bike.",
  },
  {
    id: 6,
    question: "What should I wear?",
    answer:
      "Any type of athletic clothing that you feel comfortable in is suitable, although we suggest pants that fit tight at the ankles and fabrics that are sweat wicking. Men must wear a shirt during class.",
  },
  {
    id: 7,
    question: "Do I need special shoes?",
    answer:
      "Yes! You'll need to bring indoor cycling shoes with cleats that are Look Delta or SPD compatible. We offer rental shoes for $2 per session.",
  },
  {
    id: 8,
    question: "What if I schedule a class, and don't cancel?",
    answer:
      "If you do not show to class or call to cancel, a fee of $15 (45 min class booked) or a $10 (30 min class booked) will be charged to your account and the class session will be returned to your account. If you do not have a credit card on file, your class will be forfeited. If you are on an unlimited package and you do not have a card on file, your package will be frozen until you update your card. You can read our full cancellation policy here.",
  },
]

function FAQaccordion() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <div className={mulish.className}>
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          </div>
          <div className={mulish.className}>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">

              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">{faq.question}</span>
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
                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQaccordion;

