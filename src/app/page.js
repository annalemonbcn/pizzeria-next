import Button from "@/components/Button";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="w-full min-h-screen relative flex flex-col items-center justify-between py-3 px-6 bg-cover"
      style={{ backgroundImage: "url('/pizza_01.jpg')" }}
    >
      <section className="section-first">
        <p className="text-2xl">
          <span className="text-mainRed font-semibold">ES EL SITIO.</span>{" "}
          <span>ES LA PIZZA.</span>
        </p>
      </section>
      <section className="flex flex-col justify-center items-center section-info">
        <p>
          En La Pizzeria se ha perfeccionado el arte de la masa hasta el
          delirio. Fermentada con cariño durante 72 horas para conseguir la
          textura perfecta.
        </p>
        <div className="flex gap-x-6 buttonWrapper">
          <Button className="primary">Pide online</Button>
          <Button className="primary">Nosotros</Button>
        </div>
      </section>
      {/* <Image 
        src={"/pizza_01.jpg"}
        alt="pizza image"
        fill={true}
      /> */}
    </main>
  );
}
