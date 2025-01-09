import type { Metadata } from "next";
import { Lato, Exo } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

const lato = Lato({
  subsets: ["latin"],
  weight: "100",
});
const exo = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Star Wars Wiki",
  description: "A resource page for information from a galaxy far far away.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navigation = [
    <Link key="films" href="/films">
      Films
    </Link>,
    <Link key="characters" href="/characters">
      Characters
    </Link>,
  ];

  return (
    <html lang="en">
      <body className="bg-gray-900">
        <Header
          className="text-black shrink-0"
          logo={<div>Logo</div>}
          navItems={navigation}
        />
        <div className="grow">{children}</div>
        <Footer className="shrink-0">
          <div className="container mx-auto px-6 text-center space-y-4">
            <p className="text-sm">
              Star Wars and all related names, images, and characters are
              copyright © Lucasfilm Ltd. This is a fan-made application and is
              not affiliated with or endorsed by Lucasfilm Ltd.
            </p>
            <p className="text-sm">
              Data provided by the{" "}
              <a
                href="https://swapi.tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Star Wars API (SWAPI)
              </a>
              .
            </p>
            <nav className="flex justify-center space-x-4 text-sm">
              <a href="/about" className="hover:underline">
                About
              </a>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </nav>
            <p className="text-xs mt-4 text-gray-500">
              © {new Date().getFullYear()} Galaxy Wiki. All rights reserved.
            </p>
          </div>
        </Footer>
      </body>
    </html>
  );
}
