// TODO: encriptar vars
// import dotenv from "dotenv";

// dotenv.config();

// const apiKey = process.env.FIREBASE_API_KEY;
// const authDomain = process.env.FIREBASE_AUTH_DOMAIN;
// const projectId = process.env.FIREBASE_PROJECT_ID;
// const storageBucket = process.env.FIREBASE_STORAGE_BUCKET;
// const messagingSenderId = process.env.FIREBASE_MESSAGING_SENDER_ID;
// const appId = process.env.FIREBASE_APP_ID;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZVVhj_i26yaB9WY_Fy0fk202le54IV_8",
  authDomain: "pizzeria-lamamma-26900.firebaseapp.com",
  projectId: "pizzeria-lamamma-26900",
  storageBucket: "pizzeria-lamamma-26900.appspot.com",
  messagingSenderId: "706135651101",
  appId: "1:706135651101:web:bf0b358179d42eff32e7f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
