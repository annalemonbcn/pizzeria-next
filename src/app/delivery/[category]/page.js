import StyledSection from "@/components/utils/StyledSection";
import CategoriesMenu from "@/components/products/CategoriesMenu";
import ProductsList from "@/components/products/ProductList";

import { removeUnderscores } from "@/app/utils/func";
import StyledH2 from "@/components/utils/headings/StyledH2";

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
    title: `La Mamma Pizza - Hungry? Here's a list of ${removeUnderscores(
      params.category
    )} pizzas`,
  };
}

const Products = ({ params }) => {
  const { category } = params;

  return (
    <main>
      <StyledSection>
        <StyledH2>Delivery</StyledH2>
        <CategoriesMenu />
        <ProductsList category={category} />
      </StyledSection>
    </main>
  );
};

export default Products;
