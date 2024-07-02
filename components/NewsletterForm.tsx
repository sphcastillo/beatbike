'use client'
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setMessage('');

    const response = await fetch('/api/newsletterSubscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      setMessage('Success! 🎉');
      setEmail('');
    } else {
      setMessage(data.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <form 
        className="w-full max-w-md lg:col-span-5 lg:pt-2"
        onSubmit={handleSubmit}
        >
      <div className="flex gap-x-4">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-[#DFFF00] sm:text-sm sm:leading-6"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-[#DFFF00] px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-[#B0DB00] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFFF00]"
        >
          Subscribe
        </button>
      </div>
      {message && 
        <p className="mt-4 text-sm leading-6 text-gray-300">{message}</p>
      }
        <p className="mt-4 text-sm leading-6 text-gray-300">
          We care about your data. Read our{" "}
          <a
            href="/privacy-policy"
            className="font-semibold text-white hover:text-[#DFFF00]"
          >
            privacy&nbsp;policy
          </a>
          .
        </p>
    </form>
  );
}
