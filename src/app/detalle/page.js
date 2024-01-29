import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="container mx-auto">
      <main className="w-full relative flex flex-col items-center justify-between py-3 px-6 bg-blue-500">
        <Header />
        <section className="section-nosotros">
          <p className="text-2xl">
            Aqui va la section detalle
          </p>
        </section>
      </main>
    </div>
  );
}
