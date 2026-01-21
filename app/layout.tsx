import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: "Beatbike",
  description: "This project is displayed for portfolio purposes only. Beatbike is a former business and is no longer operating. All trademarks, names, and branding belong to their respective owners.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className='h-screen'>
        <Header />
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
