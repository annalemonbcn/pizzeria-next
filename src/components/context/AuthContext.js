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
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const userFromFirestore = userCredential.user;
      if (userFromFirestore) toast.success("Register completed :)");

      setTimeout(() => {
        setUser({
          logged: true,
          email: userFromFirestore.email,
          uid: userFromFirestore.uid,
        });
      }, 1000);
    } catch (error) {
      handleAuthError(error, "register");
    }
  };

  const loginUser = async (values) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      const userFromFirestore = userCredential.user;
      if (userFromFirestore) toast.success("Welcome :)");

      setTimeout(() => {
        setUser({
          logged: true,
          email: userFromFirestore.email,
          uid: userFromFirestore.uid,
        });
      }, 1000);
    } catch (error) {
      handleAuthError(error, "login");
    }
  };

  const handleAuthError = (error, action) => {
    console.error(`Error while ${action}`, error);
    let errorMessage = `Error while ${action}`;
  
    switch (error.code) {
      case "auth/invalid-email":
        errorMessage = "Invalid email";
        break;
      case "auth/missing-password":
        errorMessage = "Password can't be empty";
        break;
      case "auth/weak-password":
        errorMessage = "Password should be at least 6 characters";
        break;
      case "auth/invalid-credential":
        errorMessage = "Invalid credentials";
        break;
      default:
        errorMessage = "An unexpected error occurred";
    }
  
    toast.error(errorMessage);
  };
  
  const authProviderValue = { user, registerUser, loginUser };

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};
