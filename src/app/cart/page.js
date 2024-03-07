"use client";
import { useEffect, useState } from "react";

import { useCartContext } from "@/components/context/CartContext";

import Checkout from "@/components/cart/checkout/Checkout";
import ClientForm from "@/components/cart/clientForm/ClientForm";
import StyledSection from "@/components/utils/StyledSection";
import StyledH2 from "@/components/utils/headings/StyledH2";

const Cart = () => {
  const [subtotalCartPrice, setsubtTotalPrice] = useState(0);
  const { cart } = useCartContext();

  useEffect(() => {
    // TODO: mover a cartContext ?
    const sumPricesInCart = () => {
      if (cart.length === 0) {
        return 0;
      }

      const totalPrice = cart.reduce((acc, pizza) => {
        return acc + pizza.item.price * pizza.qty;
      }, 0);

      return totalPrice;
    };
    setsubtTotalPrice(sumPricesInCart());
  }, [cart]);

  // if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <main>
      <StyledSection>
        <StyledH2>Cart checkout</StyledH2>
        {cart.length === 0 && <p>Your cart is empty</p>}
        {cart.length > 0 && (
          <div className="w-full flex flex-col lg:flex-row justify-between items-start">
            <Checkout subtotalCartPrice={subtotalCartPrice} className="md:w-1/2"/>
            <ClientForm />
          </div>
        )}
      </StyledSection>
    </main>
  );
};

export default Cart;
