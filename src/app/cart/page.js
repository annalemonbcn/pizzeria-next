"use client";
import { useEffect, useState } from "react";

import { useCartContext } from "@/components/context/CartContext";

import Checkout from "@/components/cart/checkout/Checkout";
import CheckoutForm from "@/components/cart/checkoutForm/CheckoutForm";
import StyledSection from "@/components/utils/StyledSection";
import StyledH2 from "@/components/utils/headings/StyledH2";

const Cart = () => {
  const [subtotalCartPrice, setsubtTotalPrice] = useState(0);
  const { cart } = useCartContext();

  useEffect(() => {
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

  return (
    <main>
      <StyledSection>
        <StyledH2>Cart checkout</StyledH2>
        {cart.length === 0 && <p>Your cart is empty</p>}
        {cart.length > 0 && (
          <div className="w-full flex flex-col lg:flex-row justify">
            <Checkout
              subtotalCartPrice={subtotalCartPrice}
              className="lg:w-2/3 lg:px-10"
            />
            <CheckoutForm className="lg:w-1/3" />
          </div>
        )}
      </StyledSection>
    </main>
  );
};

export default Cart;
