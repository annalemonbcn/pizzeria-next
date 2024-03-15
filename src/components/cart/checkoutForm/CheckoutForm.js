import { useState } from "react";
import { useCartContext } from "@/components/context/CartContext";
import Button from "@/components/utils/Button";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import StyledH3 from "@/components/utils/headings/StyledH3";
import StyledH2 from "@/components/utils/headings/StyledH2";

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

const CheckoutForm = ({ className = "" }) => {
  const { cart } = useCartContext();

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
    } catch (error) {
      console.error("Error while creating a new order", error);
    }
  };

  // TODO: validate form before send
  return (
    <div className={`mt-8 lg:mt-0 ${className}`}>
      {!orderNumberId && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-3"
        >
          <StyledH3>Client details</StyledH3>
          <input
            type="text"
            required
            placeholder="Your name"
            name="name"
            onChange={handleChange}
            className="p-2 rounded-md block"
          />
          <input
            type="text"
            required
            placeholder="Your address"
            name="address"
            onChange={handleChange}
            className="p-2 rounded-md block"
          />
          <input
            type="email"
            required
            placeholder="Your email"
            name="email"
            onChange={handleChange}
            className="p-2 rounded-md block"
          />
          <Button className="mt-4">Place order</Button>
        </form>
      )}
      {orderNumberId && (
        <>
          <StyledH2>Thank you for your order!</StyledH2>
          <div className="text-center">
            <p>
              Your order has been received and is being prepared with care. Sit
              back, relax, and get ready to enjoy the delicious flavors of our
              freshly made pizzas delivered straight to your door 🤤
            </p>
            <p>We&apos;ll notify you once your order is on its way.</p>
            <p className="mt-2 text-xl font-bold">Buon appetito!</p>
            <p className="mt-6 text-2xl">
              Your order ID is:{" "}
              <span className="font-bold">{orderNumberId}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;
