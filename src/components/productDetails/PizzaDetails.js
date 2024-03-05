import { formatPrice } from "@/app/utils/func";
import AddToCartWrapper from "./AddToCartWrapper";

const PizzaDetails = ({ currentPizza }) => (
  <div className="pizzaInfo">
    <h1 className="text-3xl text-red-main">
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
      <span className="font-bold">Price:</span>
      {formatPrice(currentPizza.price)} €
    </p>
    <AddToCartWrapper item={currentPizza}/>
  </div>
);

export default PizzaDetails;
