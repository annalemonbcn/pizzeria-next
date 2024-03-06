import CartList from "./CartList";
import Subtotal from "../subtotal/Subtotal";

const Checkout = ({ subtotalCartPrice, className = "" }) => (
  <div className={`${className}`}>
    <CartList />
    <Subtotal subtotalCartPrice={subtotalCartPrice} />
  </div>
);

export default Checkout;
