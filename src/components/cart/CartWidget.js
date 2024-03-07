"use client";
import Link from "next/link";
import CartSvg from "../svg/CartSvg";
import { useCartContext } from "../context/CartContext";
import { findMenulink } from "@/app/utils/func";

const CartWidget = () => {
  const { cartLength } = useCartContext();

  const cartLink = findMenulink("Cart");

  return (
    <Link
      className="flex justify-center items-center relative w-10 -left-3 cursor-pointer"
      href={cartLink}
    >
      <div className="relative py-2 transition-all ease-in hover:scale-[1.15] duration-150">
        <div className="t-0 absolute left-3 top-[-0.2rem]">
          <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-main p-3 text-xs text-white mb-4">
            {cartLength}
          </p>
        </div>
        <CartSvg />
      </div>
    </Link>
  );
};

export default CartWidget;
