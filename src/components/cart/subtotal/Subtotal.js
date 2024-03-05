import { formatPrice } from "@/app/utils/func";
import Total from "./Total";
import { useState, useEffect } from "react";
import Button from "@/components/style/Button";

const SubtotalElement = ({ children }) => (
  <p className="flex items-center justify-between">{children}</p>
);

const Subtotal = ({ subtotalCartPrice }) => {
  const [totalCartPrice, setTotalCartPrice] = useState(subtotalCartPrice);

  const taxPrice = 0;
  const shippingPrice = 1.99;

  useEffect(() => {
    const calculateTotalCartPrice = () => {
      setTotalCartPrice(subtotalCartPrice + shippingPrice);
    };
    calculateTotalCartPrice();
  }, [subtotalCartPrice]);

  return (
    <>
      <div className="subtotal w-1/2 mt-9">
        <SubtotalElement>
          <span>Sub-total:</span>
          <span className="font-bold">{formatPrice(subtotalCartPrice)} €</span>
        </SubtotalElement>
        <SubtotalElement>
          <span>Tax:</span>
          <span className="font-bold">{formatPrice(taxPrice)} €</span>
        </SubtotalElement>
        <SubtotalElement>
          <span>Shipping:</span>
          <span className="font-bold">{formatPrice(shippingPrice)} €</span>
        </SubtotalElement>
      </div>
      <Total totalCartprice={totalCartPrice} />
      <div className="mt-8">
        <Button>Place the order</Button>
      </div>
    </>
  );
};

export default Subtotal;
