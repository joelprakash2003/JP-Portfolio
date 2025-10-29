"use client";
import Link from "next/link";
import Image from "next/image";

  const Logo = () => {
    return (
      <div className="flex items-center gap-4">
        <Link href="/">
          <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105">
            <Image
              src="/images/logo/logo.png"
              alt="JP Logo"
              width={64}
              height={64}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <span className="text-2xl font-semibold text-white hidden sm:block">Joel Prakash</span>
      </div>
    );
};

export default Logo;
