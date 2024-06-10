import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export const metadata: Metadata = {
  title: "Beatbike",
  description: "For portfolio purposes only",
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
