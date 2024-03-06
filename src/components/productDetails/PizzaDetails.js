import { formatPrice } from "@/app/utils/func";
import AddToCartWrapper from "./AddToCartWrapper";
import StyledH3 from "../UI/headings/StyledH3";

const PizzaDetails = ({ currentPizza, className = "" }) => (
  <>
    <div className={className}>
      <div className="my-4 flex flex-col items-center gap-4 md:order-2">
        <p className="text-xl">
          <span className="font-bold">Price: </span>
          {formatPrice(currentPizza.price)} €
        </p>
        <AddToCartWrapper item={currentPizza} />
      </div>
      <div className="md:order-1 self-center">
        <StyledH3>Ingredients:</StyledH3>
        <ul>
          {currentPizza.ingredients.map((ingredient) => (
            <li key={ingredient} className="ml-4">
              - {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);

export default PizzaDetails;
