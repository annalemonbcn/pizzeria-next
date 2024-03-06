import Link from "next/link";

import Button from "@/components/utils/Button";
import LeftPill from "@/components/UI/LeftPill";
import StyledSection from "@/components/UI/StyledSection";

import { menuLinks } from "@/mock/menuLinks";
import { findMenulink } from "./utils/func";

import { Oleo_Script } from "next/font/google";
const oleoScript = Oleo_Script({ subsets: ["latin"], weight: "400" });

const Home = () => {
  const deliveryLink = findMenulink("Delivery");
  return (
    <main>
      <StyledSection
        className="w-full min-h-screen relative section-first"
        style={{ backgroundImage: "url('/home_bg.png')" }}
      >
        <LeftPill>
          <h1
            className={`text-7xl text-white uppercase ${oleoScript.className}`}
          >
            all the best
            <br />
            things are round
          </h1>
          <Link href={deliveryLink}>
            <Button className="mt-8">Order now</Button>
          </Link>
        </LeftPill>
      </StyledSection>
    </main>
  );
};

export default Home;
