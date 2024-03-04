"use client";
import Image from "next/image";
import { formatPrice } from "@/app/utils/func";

import { useEffect, useState, useMemo } from "react";

import { useCartContext } from "@/components/context/CartContext";

import { Rubik_Doodle_Shadow } from "next/font/google";
import CheckoutTable from "../../components/cart/CheckoutTable";
const rubik = Rubik_Doodle_Shadow({ subsets: ["latin"], weight: "400" });

const Cart = () => {
  const [totalCartPrice, setTotalPrice] = useState(0);
  const { cart } = useCartContext();

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
    setTotalPrice(sumPricesInCart());
  }, [cart]);

  if (cart.length === 0) return <p>Your cart is empty</p>;

  return (
    <main className="w-full flex flex-col items-start mt-12">
      <h1 className={`self-center text-2xl ${rubik.className}`}>CART</h1>
      <CheckoutTable />
      <div>
        <p className="mt-4 font-bold text-xl">
          Total cart price: {formatPrice(totalCartPrice)} €{" "}
        </p>
      </div>
    </main>
  );
};

export default Cart;
