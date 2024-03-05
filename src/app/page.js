import Button from "@/components/Button";
import Image from "next/image";
import { Rubik_Doodle_Shadow } from "next/font/google";

const rubik = Rubik_Doodle_Shadow({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main
      className="w-full min-h-screen relative flex flex-col items-center justify-between py-3 px-6 bg-cover"
      style={{ backgroundImage: "url('/pizza_01.jpg')" }}
    >
      <section className="section-first">
        <p className={`text-2xl ${rubik.className}`}>
          <span className="text-red-main font-semibold">
            IT&apos;S THE PLACE.
          </span>{" "}
          <span>IT&apos;S THE PIZZA.</span>
        </p>
      </section>
      <section className="flex flex-col justify-center items-center section-info">
        <p>
          At La Pizzeria Mamma the art of dough has been perfected to the point
          of delirium. Lovingly fermented for 72 hours to achieve the perfect
          texture.
        </p>
        {/* <div className="flex gap-x-6 buttonWrapper">
          <Button className="primary">Order  online</Button>
          <Button className="primary">Us</Button>
        </div> */}
      </section>
      {/* <Image 
        src={"/pizza_01.jpg"}
        alt="pizza image"
        fill={true}
      /> */}
    </main>
  );
}
