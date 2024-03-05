"use client";

import { useEffect, useState } from "react";

import { useCartContext } from "@/components/context/CartContext";

import CheckoutTable from "../../components/cart/checkout/CheckoutTable";
import Subtotal from "@/components/cart/subtotal/Subtotal";
import H2 from "@/components/style/headings/H2";

const Cart = () => {
  const [subtotalCartPrice, setsubtTotalPrice] = useState(0);
  const { cart } = useCartContext();

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

  useEffect(() => {
    setsubtTotalPrice(sumPricesInCart());
  }, [cart]);

  // if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <main className="w-full flex flex-col items-start mt-12">
      <H2>Cart checkout</H2>
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.length > 0 && (
        <>
          <CheckoutTable />
          <Subtotal subtotalCartPrice={subtotalCartPrice} />
        </>
      )}
    </main>
  );
};

export default Cart;
