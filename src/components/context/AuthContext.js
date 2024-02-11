"use client";
import { toast } from "sonner";

import { createContext, useContext, useState } from "react";

import { auth } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null,
  });

  const registerUser = async (values) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );

    const userFromFirestore = userCredential.user;

    setUser({
      logged: true,
      email: userFromFirestore.email,
      uid: userFromFirestore.uid,
    });
  };

  const loginUser = async (values) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const userFromFirestore = userCredential.user;

      toast.success("Welcome :)");

      setTimeout(() => {
        setUser({
          logged: true,
          email: userFromFirestore.email,
          uid: userFromFirestore.uid,
        });
      }, 1000);
    } catch (error) {
      // TODO: implementar errores
      console.error("Error while login", error);
      let errorMessage = "Error while login";

      if (error.code === "auth/invalid-credential") {
        errorMessage = "Invalid credentials";
      }
      // sentence.includes("invalid-credential")
      //   ? console.error("Error while login", error);
      //   : 'is not'
      // console.error("Error while login", error);
      toast.error(errorMessage);
    }
  };

  const authProviderValue = { user, registerUser, loginUser };

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};
