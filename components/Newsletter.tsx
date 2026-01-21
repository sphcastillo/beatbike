'use client'
import { motion } from "framer-motion";
import { proximaNovaMedium, proximaNovaRegular, proximaNovaSemibold } from "@/app/fonts";
import NewsletterForm from "./NewsletterForm";


export default function Newsletter() {

  return (
    <div className="bg-[#333333] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className={`${proximaNovaRegular.className} tracking-wide inline sm:block lg:inline xl:block`}
          >
            Subscribe for exclusive updates, special offers, and to stay in
            the loop with all things Beatbike!
          </motion.p>
        </div>

        <NewsletterForm />
      </div>
    </div>
  );
}
