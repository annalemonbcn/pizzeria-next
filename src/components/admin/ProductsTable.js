// TODO: import from firestore
import { products } from "@/mock/data";
import Image from "next/image";

const ProductsTable = () => {

  return (
    <div className="w-full mt-4 adminPanelWrapper">
      <div className="flex font-bold text-center adminPanel-title">
        <div className="w-1/6 adminPanel-title-image">Image</div>
        <div className="w-1/6 adminPanel-title-name">Name</div>
        <div className="w-1/6 adminPanel-title-ingredients">Ingredients</div>
        <div className="w-1/6 adminPanel-title-price">Price</div>
        <div className="w-1/6 adminPanel-title-category">Category list</div>
        <div className="w-1/6 adminPanel-title-actions">Actions</div>
      </div>
      <div className="flex flex-col bg-red-500 adminPanel-products">
        {products.map((pizza, index) => (
          <div
            key={pizza.id}
            className={`text-center flex element ${
              index % 2 === 0 ? "bg-green-500" : "bg-blue-500"
            }`}
          >
            <div className="w-1/6 element-image">
              <Image
                src={pizza.image}
                alt={`pizza ${pizza.name}`}
                width={175}
                height={175}
                className="mx-auto"
              />
            </div>
            <div className="w-1/6 element-name">{pizza.name}</div>
            <div className="w-1/6 element-ingredients">
              <ul>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index} className="list-disc text-left">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/6 element-price">{pizza.price} €</div>
            <div className="w-1/6 element-category">
              <ul>
                {pizza.category.map((category, index) => (
                  <li key={index} className="list-disc text-left">
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-1/6 element-actions">actions</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsTable;
