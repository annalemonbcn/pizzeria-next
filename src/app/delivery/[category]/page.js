import CategoriesMenu from "@/components/products/CategoriesMenu";
import ProductsList from "@/components/products/ProductList";

// TODO: ??
export function generateStaticParams() {
  return [
    { category: "all" },
    { category: "pizza_rossa" },
    { category: "pizza_bianca" },
  ];
}

export const revalidate = 3600;

const Products = ({ params }) => {
  const { category } = params;

  return (
    <>
      <CategoriesMenu />
      <ProductsList category={category} />
    </>
  );
};

export default Products;
