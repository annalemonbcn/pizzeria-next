import Image from "next/image";
import { products } from "@/components/mock/data";
import { capitalize, formatPrice } from "@/func";
import ButtonWrapper from "@/components/ButtonWrapper";

import { Rubik_Doodle_Shadow } from "next/font/google";
const rubik = Rubik_Doodle_Shadow({ subsets: ["latin"], weight: "400" });

const PizzaImage = ({ src, alt }) => (
  <div className="w-1/2 imageWrapper">
    <Image src={src} alt={`pizza ${alt}`} width={600} height={600} />
  </div>
);

const PizzaDetails = ({ name, ingredients, price }) => (
  <div className="pizzaInfo">
    <h1 className={`text-3xl text-mainRed ${rubik.className}`}>
      {name.toUpperCase()}
    </h1>
    <div className="mt-4 ingredientesWrapper">
      <p>Ingredientes:</p>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient} className="ml-4">
            - {ingredient}
          </li>
        ))}
      </ul>
    </div>
    <p className="my-4 text-xl">
      <span className="font-bold">Precio:</span> {formatPrice(price)} €
    </p>
    <ButtonWrapper productName={name}>Añadir al carrito</ButtonWrapper>
  </div>
);

export async function generateMetadata({ params, searchParams }, parent) {
  return {
    title: `Pizzería La Mamma - ${capitalize(params.id)}`,
  };
}

const ProductDetail = ({ params }) => {
  console.log('params', params)
  const currentPizza = products.find(
    (product) => product.id === params.id
  );

  if (!currentPizza) {
    return <div>Pizza no encontrada</div>;
  }

  const { name, image, ingredients, price } = currentPizza;

  return (
    <main className="w-full flex flex-col items-center mt-12">
      <div className="flex justify-between pizzaWraper">
        <PizzaImage src={image} alt={name} />
        <PizzaDetails name={name} ingredients={ingredients} price={price} />
      </div>
    </main>
  );
};

export default ProductDetail;
