import ProductView from "@/components/productos/ProductView";
import { formatPrice } from "@/app/utils/func";

const ProductsList = async ({ categoria }) => {
  const items = await fetch(
    `http://localhost:3000/api/productos/${categoria}`,
    { cache: "no-store" }
  ).then((res) => res.json())
  .catch((error) => {
    console.error(error);
    throw new Error(`Error al obtener los productos`);
  })

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
