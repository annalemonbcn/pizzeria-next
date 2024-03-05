import Image from "next/image";
import { capitalize } from "@/app/utils/func";
import PizzaDetails from "@/components/productDetails/PizzaDetails";
import { getSingleProduct } from "@/app/utils/api";
import { toast } from "sonner";

const PizzaImage = ({ src, alt }) => (
  <div className="w-1/2 imageWrapper">
    <Image src={src} alt={`pizza ${alt}`} width={600} height={600} />
  </div>
);

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
    <main className="w-full flex flex-col items-center mt-12">
      <div className="flex justify-between pizzaWraper">
        {currentPizza && (
          <>
            <PizzaImage src={currentPizza.image} alt={currentPizza.name} />
            <PizzaDetails currentPizza={currentPizza} />
          </>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
