import CategoriesMenu from "@/components/productos/CategoriesMenu";
import ProductsList from "@/components/productos/ProductList";

export function generateStaticParams() {
  return [
    { categoria: "todos" },
    { categoria: "pizza_rossa" },
    { categoria: "pizza_bianca" },
  ];
}

export const revalidate = 3600;

const Productos = ({ params }) => {
  const { categoria } = params;

  return (
    <>
      <CategoriesMenu />
      <ProductsList categoria={categoria} />
    </>
  );
};

export default Productos;
