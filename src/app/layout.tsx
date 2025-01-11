import type { Metadata } from "next";
import { Lato, Exo } from "next/font/google";

import LayoutHeader from "./header";
import LayoutFooter from "./footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Star Wars Wiki",
  description: "A resource page for information from a galaxy far far away.",
};

export default function RootTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-primary">
        <LayoutHeader />
        <div className="flex justify-center grow w-full ">{children}</div>
        <LayoutFooter />
      </body>
    </html>
  );
}
