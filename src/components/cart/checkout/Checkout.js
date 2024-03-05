import CartList from "./CartList";
import Subtotal from "../subtotal/Subtotal";

const Checkout = ({ subtotalCartPrice }) => {
  return (
    <div className="w-1/2">
      <CartList />
      <Subtotal subtotalCartPrice={subtotalCartPrice} />
    </div>
  );
};

export default Checkout;
