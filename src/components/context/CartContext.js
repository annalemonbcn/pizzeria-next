"use client";
import { stringToArray } from "@/app/utils/func";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const mockCart = [
    {
      item: {
        category: ["pizza_rossa"],
        id: "cotto_funghi",
        image:
          "https://firebasestorage.googleapis.com/v0/b/pizzeria-lamamma-26900.appspot.com/o/cotto_funghi.png?alt=media&token=7689f688-9d4e-4cd8-8032-1efe7b92e4eb",
        ingredients: ["tomato", "mozarella", "york ham", "fresh mushrooms"],
        name: "Cotto Funghi",
        price: 14.2,
      },
      qty: 2,
    },
    {
      item: {
        category: ["pizza_rossa"],
        id: "margherita",
        image:
        "https://firebasestorage.googleapis.com/v0/b/pizzeria-lamamma-26900.appspot.com/o/margarita.png?alt=media&token=b8328727-e3e7-4232-af2c-2c719b756efc",
        ingredients: ["tomato", "mozarella", "basil"],
        name: "Margherita",
        price: 11.5,
      },
      qty: 1,
    },
  ];

  // const [cart, setCart] = useState([]);
  const [cart, setCart] = useState(mockCart);
  const [cartLength, setCartLength] = useState(0);

  /**
   * updateCartLength *
   * Update cartLength state everytime cart state  is modified
   */
  useEffect(() => {
    const updateCartLength = () => {
      const newCartLength = cart.reduce(
        (acc, cartItem) => acc + cartItem.qty,
        0
      );
      setCartLength(newCartLength);
    };
    updateCartLength();
  }, [cart]);

  /**
   * addToCart *
   * Add a new item to the cart
   * @param {*} item
   * @param {*} qty
   */
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

  /**
   * deleteItemFromCart *
   * Deletes a selected item from the cart
   * @param {*} item
   */
  const deleteItemFromCart = (item) => {
    const newCart = cart.filter(
      (cartItem) => cartItem.item.id !== item.item.id
    );
    setCart(newCart);
  };

  /**
   * editCartItem *
   * Edits the qty attribute for a selected cart item
   * @param {*} item
   * @param {*} newQty
   */
  const editCartItem = (item, newQty) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.item.id === item.item.id
          ? { ...cartItem, qty: newQty }
          : cartItem
      )
    );
  };

  /**
   * resetCart *
   * Set the cart state to o
   */
  const resetCart = () => {
    setCart([]);
  };

  const cartProviderValue = {
    cart,
    cartLength,
    addToCart,
    deleteItemFromCart,
    editCartItem,
    resetCart,
  };

  return (
    <CartContext.Provider value={cartProviderValue}>
      {children}
    </CartContext.Provider>
  );
};
