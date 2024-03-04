import { useCartContext } from "../context/CartContext";
import CheckoutRow from "./CheckoutRow";

const CheckoutTable = () => {
  const { cart } = useCartContext();

  return (
    <div className="checkout-table w-1/2 py-14 px-8 border border-zinc-300 rounded-xl">
      <p className="text-xl font-bold pl-2">Items</p>
      <hr />
      {cart.map((pizza) => (
        <CheckoutRow key={pizza.item.id} cartItem={pizza} />
      ))}
    </div>
  );
};

export default CheckoutTable;
