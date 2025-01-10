"use client";
import React, { useMemo } from "react";
import Link from "@/components/CustomLink";
import { usePathname } from "next/navigation";

import Header from "@/components/Header";

function LayoutHeader() {
  const pathname = usePathname();

  const navigation = useMemo(
    () => [
      <Link active={pathname === "/films"} key="films" href="/films">
        Films
      </Link>,
      <Link
        active={pathname === "/characters"}
        key="characters"
        href="/characters"
      >
        Characters
      </Link>,
    ],
    [pathname]
  );

  return (
    <Header
      className="text-black shrink-0"
      logo={
        <Link className="text-xl" active={pathname === "/"} key="home" href="/">
          Home
        </Link>
      }
      navItems={navigation}
    />
  );
}

export default LayoutHeader;
