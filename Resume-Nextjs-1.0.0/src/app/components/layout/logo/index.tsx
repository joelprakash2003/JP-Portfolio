import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
          JP
        </div>
      </Link>
    </>
  );
};

export default Logo;
