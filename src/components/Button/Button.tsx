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
  const variantClass = {
    primary:
      "bg-zinc-600 text-white border-zinc-600 hover:bg-zinc-700 active:bg-zinc-800 active:shadow-inner p-3.5",
    secondary:
      "bg-white text-neutral-700 border-neutral-700 hover:bg-neutral-200 active:bg-neutral-300 active:shadow-inner p-3.5",
    text: "border-none p-0",
  };

  const disabledClass = "opacity-50 cursor-not-allowed pointer-events-none";
  const activeClass = "bg-cyan-700";

  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        variantClass[variant],
        `bg-zinc-600 rounded-lg font-bold border trasition-all duration-200 ease-in-out hover:bg-cyan-600 active:bg-cyan-700 `,
        fluid && "w-full",
        disabled && disabledClass,
        loading && disabledClass,
        active && activeClass,
        className,
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
