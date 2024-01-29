import Image from "next/image";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex flex-col justify-center items-center">
      <Image
        src={"/logo.png"}
        alt="pizzeria logo"
        width={175}
        height={175}
        priority
      />
      <Navbar />
    </header>
  );
};

export default Header;
