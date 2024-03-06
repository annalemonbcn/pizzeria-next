"use client";
import { menuLinks } from "@/mock/menuLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center items-center gap-x-8 text-xl">
      {menuLinks.map((link, index) => (
        <Link
          href={link.href}
          key={index}
          className={`${
            pathname === link.href ? "font-bold text-red-main" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
