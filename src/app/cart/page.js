"use client";
import { useEffect, useState } from "react";

import { useCartContext } from "@/components/context/CartContext";

import CartList from "../../components/cart/checkout/CartList";
import Subtotal from "@/components/cart/subtotal/Subtotal";
import H2 from "@/components/utils/headings/H2";
import Checkout from "@/components/cart/checkout/Checkout";
import ClientForm from "@/components/cart/clientForm/ClientForm";

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
        <div className="w-full flex justify-between items-start">
          <Checkout subtotalCartPrice={subtotalCartPrice} />
          <ClientForm />
        </div>
      )}
    </main>
  );
};

export default Cart;
