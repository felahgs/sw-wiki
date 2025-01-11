"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex h-full flex-col p-16 text-primary">
      <h1 className="text-3xl">Something went wrong.</h1>
      <p className="text-lg ">
        We’re sorry, but the page you’re looking for encountered an error.
      </p>
      <Link href="/" className="text-secondary">
        Back to home
      </Link>
    </div>
  );
}
