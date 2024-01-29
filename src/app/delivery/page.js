import ProductView from "@/components/ProductView";
import { products } from "@/components/mock/data";
import { formatPrice } from "@/func";

import { Rubik_Doodle_Shadow } from "next/font/google";
const rubik = Rubik_Doodle_Shadow({ subsets: ["latin"], weight: "400" });

export default function Delivery() {
  return (
    <main className="w-full flex flex-col items-center mt-12">
      <h1 className={`text-2xl font-bold text-mainRed ${rubik.className}`}>
        PIZZAS CLÁSICAS
      </h1>
      <div className="mt-4 flex gap-4 productsWrapper">
        {products.map((product) => (
          <ProductView
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={formatPrice(product.price)}
          />
        ))}
      </div>
    </main>
  );
}
