"use client";
import { toast } from "sonner";

import { createContext, useContext, useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import { auth, db, provider } from "@/firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState({
    logged: false,
    email: null,
    uid: null,
  });

  const registerUser = async (values) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      handleAuthError(error, "register");
    }
  };

  const loginUser = async (values) => {
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password);
    } catch (error) {
      handleAuthError(error, "login");
    }
  };

  const logout = async () => {
    await signOut(auth);
  };

  const googleLogin = async () => {
    await signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "roles", user.uid);
        const userDoc = await getDoc(docRef);

        if (userDoc.data()?.rol === "admin") {
          setUser({
            logged: true,
            email: user.email,
            uid: user.uid,
          });
        } else {
          router.push("/unhautorized");
          logout();
        }
      } else {
        setUser({
          logged: false,
          email: null,
          uid: null,
        });
      }
    });
  }, [router]);

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
      case "auth/email-already-in-use":
        errorMessage = "This email is already registered in the database";
        break;
      default:
        errorMessage = "An unexpected error occurred";
    }

    toast.error(errorMessage);
  };

  const authProviderValue = {
    user,
    registerUser,
    loginUser,
    logout,
    googleLogin,
  };

  return (
    <AuthContext.Provider value={authProviderValue}>
      {children}
    </AuthContext.Provider>
  );
};
