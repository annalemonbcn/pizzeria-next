import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(request, { params }) {
  const { categoria } = params;

  const productosRef = collection(db, "productos");

  const q =
    categoria === "todos"
      ? productosRef
      : query(productosRef, where("category", "==", categoria));

  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map((doc) => {
    const product = doc.data();
    product.id = doc.id;
    return product;
  });
  return NextResponse.json(docs);
}
