"use client";
import { useState } from "react";
import Button from "../Button";

const LoginForm = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values", values);
  };

  return (
    <div className="fixed w-screen h-screen inset-0 z-10 flex justify-center items-center bg-blue-400 bg-opacity-25">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            value={values.email}
            name="email"
            required
            onChange={handleChange}
            className="p-2 rounded border border-blue-100 block my-4"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={values.password}
            name="password"
            required
            onChange={handleChange}
            className="p-2 rounded border border-blue-100 block my-4"
          />
        </div>
        <Button className="primary">Login</Button>
      </form>
    </div>
  );
};

export default LoginForm;
