import CounterButton from "./CounterButton";
import { useCartContext } from "../context/CartContext";
import { toast } from "sonner"

const Counter = ({ qty, setQty, cartItem, updateCart = false }) => {
  const { editCartItem } = useCartContext();

  const updateCartItem = (newQty) => {
    try {
      editCartItem(cartItem, newQty);
      toast.success("Cart updated successfully");
    } catch (error) {
      console.error("Error while updating the cart:", error);
      toast.error("Couldn't update the cart");
    }
  };

  const substract = () => {
    const newQty = qty > 1 ? qty - 1 : qty;
    updateCart ? updateCartItem(newQty) : setQty(newQty);
  };

  const add = () => {
    const newQty = qty + 1;
    updateCart ? updateCartItem(newQty) : setQty(newQty);
  };

  return (
    <div className="counter flex items-center justify-start gap-4">
      <CounterButton onClick={substract}>-</CounterButton>
      <p className="font-bold">x{qty}</p>
      <CounterButton onClick={add}>+</CounterButton>
    </div>
  );
};

export default Counter;
