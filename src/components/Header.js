import Image from "next/image";
import Navbar from "./Navbar";
import CartSvg from "./svg/Cart";
import CartWidget from "./cart/CartWidget";

const Header = () => {
  return (
    <header className="relative flex flex-col justify-center items-center">
      <Image
        src={"/logo.png"}
        alt="pizzeria logo"
        width={175}
        height={175}
        priority
      />
      <Navbar />
      <CartWidget />
    </header>
  );
};

export default Header;
