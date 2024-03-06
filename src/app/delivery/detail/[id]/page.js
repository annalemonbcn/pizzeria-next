import StyledSection from "@/components/UI/StyledSection";
import StyledH2 from "@/components/UI/headings/StyledH2";
import PizzaImage from "@/components/productDetails/PizzaImage";
import PizzaDetails from "@/components/productDetails/PizzaDetails";

import { getSingleProduct } from "@/app/utils/api";

import { capitalize } from "@/app/utils/func";

import { toast } from "sonner";

// TODO: generate metada for every page
export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `La Mamma Pizza - Try our delicious pizza ${capitalize(params.id)}`,
  };
}

const ProductDetail = async ({ params }) => {
  const { id } = params;

  let currentPizza;

  try {
    currentPizza = await getSingleProduct(id);
    currentPizza.id = id;
  } catch (error) {
    console.error(error);
    toast.error(error);
  }

  return (
    <main>
      <StyledSection>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center pb-8">
          {currentPizza && (
            <>
              <StyledH2 className="md:w-full">{currentPizza.name}</StyledH2>
              <PizzaImage currentPizza={currentPizza} className="w-5/6 md:w-1/2"/>
              <PizzaDetails currentPizza={currentPizza} className="w-5/6 md:w-1/2 flex flex-col"/>
            </>
          )}
        </div>
      </StyledSection>
    </main>
  );
};

export default ProductDetail;
