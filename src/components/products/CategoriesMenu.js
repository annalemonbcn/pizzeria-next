"use client";
import Link from "next/link";
import { categoriesMenuLinks } from "@/mock/menuLinks";
import { usePathname } from "next/navigation";

const CategoriesMenu = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center gap-4">
      {categoriesMenuLinks.map((link, idx) => (
        <Link
          key={idx}
          href={link.href}
          className={`
          ${pathname === link.href ? "font-bold text-red-main" : ""}
          `}
        >
          <div className="flex items-center gap-2">
            {idx === 1 && <span className="text-black-main">|</span>}
            {link.label}
            {idx === 1 && <span className="text-black-main">|</span>}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesMenu;
