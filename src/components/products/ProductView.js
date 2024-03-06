import Link from "next/link";
import Image from "next/image";

const ProductView = ({ id, name, image, price }) => {
  return (
    <Link
      href={`/delivery/detail/${id}`}
      className="flex flex-col items-center lg:w-72"
    >
      <p className="font-bold title">{name}</p>
      <Image src={image} alt={`Pizza ${name}`} width={150} height={150} />
      <p>{price} €</p>
    </Link>
  );
};

export default ProductView;
