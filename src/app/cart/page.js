"use client";
import Image from "next/image";
import { formatPrice } from "@/app/utils/func";

import { useEffect, useState, useMemo } from "react";

import { useCartContext } from "@/components/context/CartContext";

import { Rubik_Doodle_Shadow } from "next/font/google";
const rubik = Rubik_Doodle_Shadow({ subsets: ["latin"], weight: "400" });

const Cart = () => {
  const { cart } = useCartContext();

  const [totalCartPrice, setTotalPrice] = useState(0);

  const sumPricesInCart = () => {
    if (cart.length === 0) {
      return 0;
    }

    const totalPrice = cart.reduce((acc, pizza) => {
      return acc + pizza.item.price;
    }, 0);

    return totalPrice;
  };

  useEffect(() => {
    setTotalPrice(sumPricesInCart());
  }, [cart]);

  return (
    <main className="w-full flex flex-col items-center mt-12">
      <h1 className={`text-2xl ${rubik.className}`}>CART</h1>
      <div className="mt-4 cartWrapper">
        {cart.map((pizza) => (
          <div
            key={pizza.item.name}
            className="flex items-center gap-x-6 gap-y-3 cartElement"
          >
            <Image
              src={pizza.item.image}
              alt={`pizza ${pizza.item.name}`}
              width={175}
              height={175}
            />
            <div className="flex flex-col cartElement-info">
              <p>{pizza.item.name}</p>
              <p>{formatPrice(pizza.item.price)} €</p>
            </div>
          </div>
        ))}
        <p className="mt-4 font-bold text-xl">
          Total cart price: {totalCartPrice} €{" "}
        </p>
      </div>
    </main>
  );
};

export default Cart;
