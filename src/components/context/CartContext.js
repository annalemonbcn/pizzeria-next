"use client";
import { stringToArray } from "@/app/utils/func";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  // ! cartItemExample:
  //   {
  //     item: {
  //       category: Array,
  //       id: string,
  //       image: string,
  //       ingredients: Array,
  //       name: string,
  //       price: numnber
  //     },
  //     qty: number
  //   }

  const mockCart = [
    {
      item: {
        category: ["bianca"],
        id: "margherita",
        image:
          "https://firebasestorage.googleapis.com/v0/b/pizzeria-lamamma-26900.appspot.com/o/margarita.png?alt=media&token=b8328727-e3e7-4232-af2c-2c719b756efc",
        ingredients: ["mozarella", "tomate"],
        name: "Margherita",
        price: 11.5,
      },
      qty: 2,
    },
    {
      item: {
        category: ["pizza_rossa"],
        id: "hawaiana",
        image:
          "https://firebasestorage.googleapis.com/v0/b/pizzeria-lamamma-26900.appspot.com/o/hawaiana.png?alt=media&token=68d92706-9bee-4291-8c24-a6b8cb6b2427",
        ingredients: ["mozarella", "tomate"],
        name: "Hawaiana",
        price: 13.5,
      },
      qty: 3,
    },
  ];

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
