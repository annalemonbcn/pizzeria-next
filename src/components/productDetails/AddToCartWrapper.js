"use client";
import Button from "../utils/Button";
import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Counter from "../counter/Counter";

const AddToCartWrapper = ({ item, className = "" }) => {
  const { addToCart } = useCartContext();

  const router = useRouter();

  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    try {
      addToCart(item, qty);
      toast.success(`${item.name} added to cart - quantity: ${qty}`, {
        action: {
          label: "View cart",
          onClick: () => router.replace("/cart"),
        },
      });
    } catch (error) {
      console.error("Error while adding an item to cart", error);
      toast.error("Error while adding ${item.name} to cart");
    }
  };

  const counterProps = {
    qty,
    setQty,
    updateCart: false,
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <Counter {...counterProps} />
      <Button onClick={handleAdd}>Add to cart</Button>
    </div>
  );
};

export default AddToCartWrapper;
