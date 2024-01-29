export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Pizzería La Mamma - ${params.id}`
  }
}

const Detalle = ({ params }) => {
  console.log("params", params);
  return (
    <div className="container mx-auto">
      <main className="w-full relative flex flex-col items-center justify-between py-3 px-6 bg-blue-500">
        <section className="section-nosotros">
          <p className="text-2xl">Aqui va la section detalle de producto</p>
          <p className="text-2xl">Estás viendo: {params.id}</p>
        </section>
      </main>
    </div>
  );
};

export default Detalle;
