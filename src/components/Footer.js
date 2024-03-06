"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // TODO: footer no se ve en rutas que no son la home
  // Se ha quitado del rootLayout y se ha puesto solo en home page.js
  return (
    <footer
      className={`w-screen ${
        isHome ? "fixed" : "static"
      } bottom-0 text-xs md:text-sm flex flex-row items-center justify-center gap-2 p-4 text-red-main bg-white`}
    >
      <a
        href="https://github.com/annalemonbcn"
        className="underline underline-offset-2"
      >
        © annalemonbcn
      </a>
      <span>-</span>
      <p>Web development from Barcelona</p>
    </footer>
  );
};

export default Footer;
