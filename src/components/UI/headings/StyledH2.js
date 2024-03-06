import { Oleo_Script } from "next/font/google";
const oleoScript = Oleo_Script({ subsets: ["latin"], weight: "400" });

const StyledH2 = ({ children, className = "" }) => {
  return (
    <h2
      className={`py-4 text-3xl md:text-4xl text-red-main text-center ${className} ${oleoScript.className}`}
    >
      {children}
    </h2>
  );
};

export default StyledH2;
