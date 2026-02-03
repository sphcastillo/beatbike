import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import { FathomAnalytics } from "./fathom";
import PortfolioPurpose from "@/components/PortfolioPurpose";



export const metadata: Metadata = {
  metadataBase: new URL("https://www.beatbikecycling.com"),

  title: {
    default: "Beatbike",
    template: "%s | Beatbike",
  },

  description:
    "A fitness booking and membership web app concept featuring free trial credits, multi-studio class reservations, flexible cancellation rules, and a UX-driven product architecture. Built and presented as a portfolio project.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Beatbike",
    description:
      "A fitness booking and membership web app concept with free trial credits, multi-studio class reservations, and flexible cancellation logic—built and presented as a portfolio project.",
    url: "/",
    siteName: "Beatbike",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beatbike — portfolio project preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Beatbike",
    description:
      "A fitness booking and membership web app concept with free trial credits, multi-studio class reservations, and flexible cancellation logic—built and presented as a portfolio project.",
    images: ["/og-image.jpg"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body className='h-screen'>
          <FathomAnalytics />
          <PortfolioPurpose />
          <Header />
          <Banner />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
