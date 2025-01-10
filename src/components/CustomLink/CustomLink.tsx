import React, { ClassAttributes, CSSProperties, ReactNode } from "react";

import NextLink, { LinkProps } from "next/link";
import clsx from "clsx";

export interface CustomLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
  active?: boolean;
}

function Link({ children, className, active, ...props }: CustomLinkProps) {
  return (
    <NextLink
      className={clsx("hover:underline", className, active && "text-tertiary")}
      {...props}
    >
      {children}
    </NextLink>
  );
}

export default Link;
