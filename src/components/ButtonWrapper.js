"use client";
import Button from "./Button";
import { useCartContext } from "./context/CartContext";

const ButtonWrapper = ({ children, item }) => {
  const { addToCart } = useCartContext();

  const qty = 1;
  
  const handleAdd = () => {
    addToCart(item, qty);
  };

  return (
    <div>
      <Button className="primary" onClick={handleAdd}>
        {children}
      </Button>
    </div>
  );
};

export default ButtonWrapper;
