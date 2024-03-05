"use client";
import Button from "./style/Button";
import { useCartContext } from "./context/CartContext";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const ButtonAddToCartWrapper = ({ children, item }) => {
  const router = useRouter();

  const { addToCart } = useCartContext();

  const qty = 1;

  const handleAdd = () => {
    try {
      addToCart(item, qty);
      toast.success(`${item.name} added to cart - quantity: 1`, {
        action: {
          label: "View cart",
          onClick: () => router.replace("/cart"),
        },
      });
    } catch (error) {
      let errorMsg = `Error while adding ${item.name} to cart`;
      console.error(errorMsg);
      toast.error(errorMsg);
    }
  };

  return (
    <div>
      <Button className="primary" onClick={handleAdd}>
        {children}
      </Button>
    </div>
  );
};

export default ButtonAddToCartWrapper;
