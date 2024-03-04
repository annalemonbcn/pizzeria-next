"use client";
import Image from "next/image";
import { formatPrice } from "@/app/utils/func";

import { useEffect, useState, useMemo } from "react";

import { useCartContext } from "@/components/context/CartContext";

import { Rubik_Doodle_Shadow } from "next/font/google";
import CheckoutTable from "../../components/cart/checkout/CheckoutTable";
import Subtotal from "@/components/cart/subtotal/Subtotal";
const rubik = Rubik_Doodle_Shadow({ subsets: ["latin"], weight: "400" });

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

  if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <main className="w-full flex flex-col items-start mt-12">
      <h1 className={`self-center text-2xl ${rubik.className}`}>CART</h1>
      <CheckoutTable />
      <Subtotal subtotalCartPrice={subtotalCartPrice} />
    </main>
  );
};

export default Cart;
