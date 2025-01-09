import clsx from "clsx";
import React, { HTMLProps, ReactNode } from "react";

export interface FooterProps extends HTMLProps<HTMLElement> {
  children?: ReactNode;
}

function Footer({ children, className }: FooterProps) {
  return (
    <footer
      className={clsx(
        "flex w-full py-4 items-center justify-center min-h-44 bg-neutral-700 text-white",
        className
      )}
    >
      {children}
    </footer>
  );
}

export default Footer;
