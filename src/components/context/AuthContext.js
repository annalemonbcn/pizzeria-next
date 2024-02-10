"use client";
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
    const userCredential = await signInWithEmailAndPassword(
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

  const authProviderValue = { user, registerUser, loginUser };

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};
