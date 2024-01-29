import Image from "next/image";

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
      <nav className="mt-4 flex justify-center items-center gap-x-3 text-xl">
        <a href="/inicio" className="text-mainRed font-semibold">
          inicio
        </a>
        <a href="/nosotros">nosotros</a>
        <a href="/delivery">pide online</a>
      </nav>
    </header>
  );
};

export default Header;
