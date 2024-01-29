"use client";
import Image from "next/image";
import { products } from "@/components/mock/data";
import { formatPrice } from "@/func";

import { useEffect, useState, useMemo } from "react";

import { Rubik_Doodle_Shadow } from "next/font/google";
const rubik = Rubik_Doodle_Shadow({ subsets: ["latin"], weight: "400" });

const Cart = () => {
  const [totalCartPrice, setTotalPrice] = useState(0);

  const pizzasInCart = useMemo(() => [products[0], products[1]], []);

  const sumPricesInCart = (pizzasInCart) => {
    if (pizzasInCart.length === 0) {
      return 0;
    }

    const totalPrice = pizzasInCart.reduce((accumulator, pizza) => {
      return accumulator + pizza.price;
    }, 0);

    return totalPrice;
  };

  useEffect(() => {
    setTotalPrice(sumPricesInCart(pizzasInCart));
  }, [pizzasInCart]);

  return (
    <main className="w-full flex flex-col items-center mt-12">
      <h1 className={`text-2xl ${rubik.className}`}>CARRITO</h1>
      <div className="mt-4 carritoWrapper">
        {pizzasInCart.map((pizza) => (
          <div
            key={pizza.name}
            className="flex items-center gap-x-6 gap-y-3 carritoElement"
          >
            <Image
              src={pizza.image}
              alt={`pizza ${pizza.name}`}
              width={175}
              height={175}
            />
            <div className="flex flex-col carritoElement-info">
              <p>{pizza.name}</p>
              <p>{formatPrice(pizza.price)} €</p>
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
