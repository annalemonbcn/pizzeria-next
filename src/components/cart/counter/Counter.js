import { useState } from "react";
import CounterButton from "./CounterButton";

import { useCartContext } from "@/components/context/CartContext";

import { toast } from "sonner";

const Counter = ({ cartItem, qty }) => {
  const { editCartItem } = useCartContext();
  const [counterQty, setCounterQty] = useState(qty);

  const updateCartItem = (newQty) => {
    try {
      editCartItem(cartItem, newQty);
      setCounterQty(newQty);
      toast.success("Cart updated successfully");
    } catch (error) {
      console.error("Error while updating the cart:", error);
      toast.error("Couldn't update the cart");
    }
  };

  const substract = () => {
    if (counterQty > 1) updateCartItem(counterQty - 1);
  };

  const add = () => {
    updateCartItem(counterQty + 1);
  };

  return (
    <div className="counter flex items-center justify-between gap-2">
      <CounterButton onClick={substract}>-</CounterButton>
      <p className="font-bold">x{counterQty}</p>
      <CounterButton onClick={add}>+</CounterButton>
    </div>
  );
};

export default Counter;
