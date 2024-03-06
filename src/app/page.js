import Link from "next/link";

import Button from "@/components/utils/Button";
import LeftPill from "@/components/utils/LeftPill";
import StyledSection from "@/components/utils/StyledSection";
import Footer from "@/components/Footer";

import { findMenulink } from "./utils/func";

import StyledH1 from "@/components/utils/headings/StyledH1";

const Home = () => {
  const deliveryLink = findMenulink("Delivery");
  return (
    <main>
      <StyledSection
        homeSection
        className="w-full min-h-screen relative section-first"
        style={{ backgroundImage: "url('/home_bg.png')" }}
      >
        <LeftPill>
          <StyledH1>
            all the best
            <br />
            things are round
          </StyledH1>
          <Link href={deliveryLink}>
            <Button className="mt-8">Order now</Button>
          </Link>
        </LeftPill>
      </StyledSection>
      <Footer />
    </main>
  );
};

export default Home;
