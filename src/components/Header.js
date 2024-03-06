import Image from "next/image";
import Navbar from "./Navbar";
import CartWidget from "./cart/CartWidget";
import Link from "next/link";

const Header = () => (
  <header className="w-screen px-6 md:px-14 fixed top-10 flex items-center text-white bg-transparent z-10">
    <div className="hidden lg:w-1/3 lg:flex justify-start">
      <Navbar />
    </div>
    <div className="w-2/3 lg:w-1/3 flex flex-col lg:justify-center">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
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

export default Header;
