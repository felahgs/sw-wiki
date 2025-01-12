"use client";
import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import Loader from "../Loader";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "text";
  loading?: boolean;
  fluid?: boolean;
  disabled?: boolean;
  active?: boolean;
}

function Button({
  variant = "primary",
  fluid = false,
  loading = false,
  active = false,
  children,
  disabled,
  className,
  ...rest
}: ButtonProps) {
  const disabledClass = "opacity-50 cursor-not-allowed pointer-events-none";
  const activeClass = "bg-cyan-700";

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        `${active ? "bg-cyan-700" : "bg-zinc-600"} text-white border-zinc-600 hover:bg-zinc-700 active:bg-cyan-700 active:shadow-inner p-3.5 rounded-lg font-bold border trasition-all duration-200 ease-in-out `,
        fluid && "w-full",
        disabled && disabledClass,
        loading && disabledClass,
        active && activeClass,
        className
      )}
      {...rest}
    >
      {loading ? (
        <div className="flex flex-row ">
          <Loader className="pr-3" iconClass="h-[20px] w-[20px]" />
          Loading ...
        </div>
      ) : (
        children
      )}
    </button>
  );
}

export default Button;
