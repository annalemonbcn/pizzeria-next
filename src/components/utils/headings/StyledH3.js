import { Oleo_Script } from "next/font/google";
const oleoScript = Oleo_Script({ subsets: ["latin"], weight: "400" });

const StyledH3 = ({ children, className = "" }) => {
  return (
    <h3
      className={`py-2 text-2xl md:text-2xl ${className} ${oleoScript.className}`}
    >
      {children}
    </h3>
  );
};

export default StyledH3;
