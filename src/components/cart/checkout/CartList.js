import { useCartContext } from "../../context/CartContext";
import CheckoutRow from "./CheckoutRow";
import StyledH3 from "@/components/utils/headings/StyledH3";

const CartList = () => {
  const { cart } = useCartContext();

  return (
    <div className="checkout-table p-4 lg:py-14 lg:px-8 border border-gray-main rounded-xl">
      <StyledH3 className="text-xl font-bold pl-2">Items</StyledH3>
      <hr />
      <div className="checkout-tableBody mt-4 lg:mt-8">
        {cart.map((pizza) => (
          <CheckoutRow key={pizza.item.id} cartItem={pizza} />
        ))}
      </div>
    </div>
  );
};

export default CartList;
