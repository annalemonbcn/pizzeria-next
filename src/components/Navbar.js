"use client";
import { menuLinks } from "@/mock/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="mt-4 flex justify-center items-center gap-x-3 text-xl">
      {menuLinks.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={`${
            pathname === link.href ? "font-bold text-mainRed" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
