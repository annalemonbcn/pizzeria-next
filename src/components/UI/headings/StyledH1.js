import { Oleo_Script } from "next/font/google";
const oleoScript = Oleo_Script({ subsets: ["latin"], weight: "400" });

const StyledH1 = ({ children, className = "" }) => {
  return (
    <h1
      className={`text-5xl md:text-7xl text-white uppercase ${className} ${oleoScript.className}`}
    >
      {children}
    </h1>
  );
};

export default StyledH1;
