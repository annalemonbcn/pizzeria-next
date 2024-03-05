"use client";
import { useState } from "react";
import { useCartContext } from "@/components/context/CartContext";
import Button from "@/components/utils/Button";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";

const createOrder = async (values, items) => {
  const order = {
    client: values,
    items: items.map((item) => ({
      name: item.item.name,
      price: item.item.price,
      quantity: item.qty,
    })),
    date: new Date().toISOString(),
  };

  const docId = Timestamp.fromDate(new Date()).toMillis();
  const orderRef = doc(db, "orders", String(docId));
  await setDoc(orderRef, order);

  return docId;
};

const ClientForm = () => {
  const { cart, resetCart } = useCartContext();

  const [values, setValues] = useState({
    email: "",
    address: "",
    name: "",
  });
  const [orderNumberId, setOrderNumberId] = useState("");

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createOrder(values, cart);
      setOrderNumberId(result);
      // Reset cart after 10 seconds
      setTimeout(() => {
        resetCart();
      }, 10000);
    } catch (error) {
      console.error("Error while creating a new order", error);
    }
  };

  if (orderNumberId === "") {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Your name"
          name="name"
          onChange={handleChange}
          className=""
        />
        <input
          type="text"
          required
          placeholder="Your address"
          name="address"
          onChange={handleChange}
          className=""
        />
        <input
          type="email"
          required
          placeholder="Your email"
          name="email"
          onChange={handleChange}
          className=""
        />
        <Button>Place order</Button>
      </form>
    );
  }

  return (
    <div>
      <p>Thanks for ordering!</p>
      <p>Your order ID is: {orderNumberId}</p>
    </div>
  );
};

export default ClientForm;
