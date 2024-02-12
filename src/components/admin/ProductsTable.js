import Image from "next/image";
import { getAllProducts } from "@/app/utils/api";
import { toast } from "sonner";

const ProductsTableTitle = () => {
  const titles = [
    "Image",
    "Name",
    "Ingredients",
    "Price",
    "Category list",
    "Actions",
  ];

  return (
    <div className="flex font-bold text-center adminPanel-title">
      {titles.map((title, index) => (
        <div
          className={`w-1/6 adminPanel-title-${title.toLowerCase()}`}
          key={index}
        >
          {title}
        </div>
      ))}
    </div>
  );
};

const ProductsTableBody = ({ itemsFromFirestore }) => {
  return (
    <div className="flex flex-col bg-red-500 adminPanel-products">
      {itemsFromFirestore.map((pizza, index) => (
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
  );
};

const ProductsTable = async () => {
  // TODO: optimizar peticiones GET
  let itemsFromFirestore;
  try {
    itemsFromFirestore = await getAllProducts();
  } catch (error) {
    console.error(error);
    toast.error(error);
  }

  return (
    <div className="w-full mt-4 adminPanelWrapper">
      <ProductsTableTitle />
      {itemsFromFirestore && (
        <ProductsTableBody itemsFromFirestore={itemsFromFirestore} />
      )}
    </div>
  );
};

export default ProductsTable;
