"use client";
import Link from "next/link";
import { menuLinks } from "@/mock/menuLinks";
import ArrowRight from "./svg/ArrowRight";
import { usePathname } from "next/navigation";

const Navbar = ({ className = "" }) => {
  const pathname = usePathname();

  return (
    <nav
      className={`flex flex-col lg:flex-row justify-center lg:items-center gap-x-8 text-xl ${className}`}
    >
      {menuLinks.map((link, idx) => (
        <Link
          href={link.href}
          key={idx}
          className={`${
            pathname === link.href ? "font-bold text-red-main" : ""
          }`}
        >
          <div className="flex items-center">
            <ArrowRight className="lg:hidden" /> {link.label}
          </div>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
