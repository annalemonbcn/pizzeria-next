import { formatPrice } from "@/app/utils/func";
import Total from "./Total";
import { useState, useEffect } from "react";
import Button from "@/components/utils/Button";

const SubtotalElement = ({ children }) => (
  <p className="flex items-center justify-start">{children}</p>
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
      <div className="w-full lg:w-1/2 mt-9 pb-4 border-b border-gray-main">
        <SubtotalElement>
          <span className="w-1/3">Sub-total:</span>
          <span className="font-bold">{formatPrice(subtotalCartPrice)} €</span>
        </SubtotalElement>
        <SubtotalElement>
          <span className="w-1/3">Tax:</span>
          <span className="font-bold">{formatPrice(taxPrice)} €</span>
        </SubtotalElement>
        <SubtotalElement>
          <span className="w-1/3">Delivery:</span>
          <span className="font-bold">{formatPrice(shippingPrice)} €</span>
        </SubtotalElement>
      </div>
      <Total totalCartprice={totalCartPrice} />
    </>
  );
};

export default Subtotal;
