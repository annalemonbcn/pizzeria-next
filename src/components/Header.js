"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import CartWidget from "./cart/CartWidget";
import Link from "next/link";

import { usePathname } from "next/navigation";

// TODO: check header in desktop
const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header
      className={`w-screen px-6 md:px-14 ${isHome ? "fixed" : "relative" } top-10 flex items-center ${
        isHome ? "text-white" : "text-base"
      } bg-transparent z-10`}
    >
      <div className="hidden lg:w-1/3 lg:flex justify-start">
        <Navbar />
      </div>
      <div className="w-2/3 lg:w-1/3 flex flex-col lg:justify-center">
        <Link href={"/"}>
          <Image
            src={isHome ? "/logo_white.png" : "/logo_black.png"}
            alt="pizzeria logo"
            width={324}
            height={34}
            priority
          />
        </Link>
        <Navbar className="mt-4 lg:hidden" />
      </div>
      {/* TODO: why cart icon is down in mobile */}
      <div className="w-1/3 lg:w-1/3 flex justify-end">
        <CartWidget />
      </div>
    </header>
  );
};

export default Header;
