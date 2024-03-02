"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  // Update CartLength everytime cart is modified
  useEffect(() => {
    const updateCartLength = () => {
      const newCartLength = cart.reduce((acc, cartItem) => acc + cartItem.qty, 0);
      setCartLength(newCartLength)
    };
    updateCartLength();
  }, [cart]);

  const addToCart = (item, qty) => {
    const productIndex = cart.findIndex(
      (product) => product.item.id === item.id
    );

    if (productIndex === -1) {
      const newCartItem = { item, qty };
      setCart([...cart, newCartItem]);
    } else {
      const currentQty = cart[productIndex].qty;

      const updatedCartProduct = {
        ...cart[productIndex],
        qty: currentQty + qty,
      };

      const updatedCart = [...cart];
      updatedCart[productIndex] = updatedCartProduct;

      setCart(updatedCart);
    }
  };

  const resetCart = () => {
    setCart([]);
  };

  const cartProviderValue = {
    cart,
    cartLength,
    addToCart,
    resetCart,
  };

  return (
    <CartContext.Provider value={cartProviderValue}>
      {children}
    </CartContext.Provider>
  );
};
