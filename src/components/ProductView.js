import Link from "next/link";
import Image from "next/image";

const ProductView = ({ id, name, image, price }) => {
  return (
    <Link href={`/producto/${id}`} className="flex flex-col items-center">
      <p className="text-mainRed font-bold title">{name}</p>
      <Image src={image} alt={`Pizza ${name}`} width={150} height={150} />
      <p>{price} €</p>
    </Link>
  );
};

export default ProductView;
