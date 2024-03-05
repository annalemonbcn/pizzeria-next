import { removeUnderscores } from "@/app/utils/func";
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

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `La Mamma Pizza - Hungry? Here's a list of ${removeUnderscores(params.category)} pizzas`,
  };
}

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
