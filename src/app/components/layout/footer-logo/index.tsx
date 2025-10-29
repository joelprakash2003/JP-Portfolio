"use client";
import Link from "next/link";
import Image from "next/image";

const FooterLogo = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer hover:scale-105">
          <Image
            src="/images/logo/logo.png"
            alt="JP Logo"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
    </div>
  );
};

export default FooterLogo;
