import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET(request, { params }) {
  const { category } = params;

  const productsRef = collection(db, "productos");

  const q =
  category === "all"
      ? productsRef
      : query(productsRef, where("category", "array-contains", category));

  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map((doc) => {
    const product = doc.data();
    product.id = doc.id;
    return product;
  });
  return NextResponse.json(docs);
}
