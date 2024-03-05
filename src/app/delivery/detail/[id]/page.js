import Image from "next/image";
import { capitalize, formatPrice } from "@/app/utils/func";
import ButtonAddToCartWrapper from "@/components/ButtonAddToCartWrapper";
import { getSingleProduct } from "@/app/utils/api";
import { toast } from "sonner";

import { Rubik_Doodle_Shadow } from "next/font/google";
const rubik = Rubik_Doodle_Shadow({ subsets: ["latin"], weight: "400" });

const PizzaImage = ({ src, alt }) => (
  <div className="w-1/2 imageWrapper">
    <Image src={src} alt={`pizza ${alt}`} width={600} height={600} />
  </div>
);

const PizzaDetails = ({ currentPizza }) => (
  <div className="pizzaInfo">
    <h1 className={`text-3xl text-red-main ${rubik.className}`}>
      {currentPizza.name.toUpperCase()}
    </h1>
    <div className="mt-4 ingredientesWrapper">
      <p>Ingredients:</p>
      <ul>
        {currentPizza.ingredients.map((ingredient) => (
          <li key={ingredient} className="ml-4">
            - {ingredient}
          </li>
        ))}
      </ul>
    </div>
    <p className="my-4 text-xl">
      <span className="font-bold">Price:</span>{" "}
      {formatPrice(currentPizza.price)} €
    </p>
    <ButtonAddToCartWrapper item={currentPizza}>Add to cart</ButtonAddToCartWrapper>
  </div>
);

// TODO: generate metada for every page
export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `La Mamma Pizza - ${capitalize(params.id)}`,
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
