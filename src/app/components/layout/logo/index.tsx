"use client";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-full px-1 py-1 text-lg font-semibold text-primary tracking-tight hover:text-primary/80 transition-colors"
    >
      <span>Joel Prakash</span>
    </Link>
  );
};

export default Logo;
