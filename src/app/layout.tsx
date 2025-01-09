import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

import Image from "next/image";
import Link from "next/link";

const archivo = Archivo({ subsets: ["latin"] });

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
      <body className={archivo.className}>
        <Header
          className="text-black shrink-0"
          logo={<div>Logo</div>}
          navItems={navigation}
        />
        {children}
        <Footer className="shrink-0">
          <div>footer</div>
        </Footer>
      </body>
    </html>
  );
}
