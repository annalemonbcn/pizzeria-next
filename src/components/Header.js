import Image from "next/image";
import Navbar from "./Navbar";
import CartWidget from "./cart/CartWidget";
import Link from "next/link";

const Header = () => (
  <header className="w-[90%] left-[5%] fixed top-10 text-white flex items-center bg-transparent z-10">
    <div className="w-1/3 flex justify-start">
      <Navbar />
    </div>
    <div className="w-1/3 flex justify-center">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="pizzeria logo"
          width={324}
          height={34}
          priority
        />
      </Link>
    </div>
    <div className="w-1/3 flex justify-end">
      <CartWidget />
    </div>
  </header>
);

export default Header;
