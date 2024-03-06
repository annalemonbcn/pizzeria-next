import ProductView from "@/components/products/ProductView";
import { getAllProducts } from "@/app/utils/api";

import { formatPrice } from "@/app/utils/func";

import { toast } from "sonner";

const ProductsList = async ({ category }) => {
  let items;

  try {
    items = await getAllProducts(category);
  } catch (error) {
    console.error(error);
    toast.error(error);
  }

  return (
    <div className="py-8 flex justify-center flex-wrap gap-x-4 gap-y-10">
      {items.map((product) => (
        <ProductView
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={formatPrice(product.price)}
        />
      ))}
    </div>
  );
};

export default ProductsList;
