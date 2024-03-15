import Link from "next/link";
import Image from "next/image";
import Button from "../utils/Button";

const ImageContainer = ({ imageSrc, pizzaName }) => (
  <div className="rounded-t-2xl bg-gray-dark-main">
    <Image src={imageSrc} alt={`Pizza ${pizzaName}`} width={230} height={230} />
  </div>
);

const ProductBody = ({ pizzaName, price }) => (
  <div className="px-5 pt-5 pb-6 bg-white border border-gray-dark-main border-t-0 rounded-b-2xl">
    <div className="flex items-center justify-between text-lg">
      <p>{pizzaName}</p>
      <p className="font-bold">{price} €</p>
    </div>
    <Button className="mt-4" variant="small">
      View
    </Button>
  </div>
);

const ProductView = ({ id, name, image, price }) => {
  const imageContainerProps = {
    imageSrc: image,
    pizzaName: name,
  };

  const productBodyProps = {
    pizzaName: name,
    price,
  };

  return (
    <Link href={`/delivery/detail/${id}`}>
      <ImageContainer {...imageContainerProps} />
      <ProductBody {...productBodyProps} />
    </Link>
  );
};

export default ProductView;
