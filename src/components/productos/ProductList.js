import ProductView from "@/components/productos/ProductView";
import { formatPrice } from "@/app/utils/func";
import { toast } from "sonner";
import { getAllProducts } from "@/app/utils/api";

const ProductsList = async ({ categoria }) => {
  let items;

  try {
    items = await getAllProducts(categoria);
  } catch (error) {
    console.error(error);
    toast.error(error);
  }

  return (
    <div className="mt-4 flex gap-4 productsWrapper">
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
