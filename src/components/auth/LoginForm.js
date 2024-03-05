"use client";
import { useState } from "react";
import Button from "../style/Button";
import GoogleButton from "react-google-button";

import { useAuthContext } from "../context/AuthContext";

const LoginForm = () => {
  const { registerUser, loginUser, googleLogin } = useAuthContext();

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
            onChange={handleChange}
            className="p-2 rounded border border-blue-100 block my-4"
          />
        </div>
        <div className="actionButtons">
          <div className="mb-6 flex items-center justify-center gap-4">
            <Button className="primary" onClick={() => loginUser(values)}>
              Login
            </Button>
            <Button className="primary" onClick={() => registerUser(values)}>
              Register
            </Button>
          </div>
          <GoogleButton onClick={googleLogin} />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
