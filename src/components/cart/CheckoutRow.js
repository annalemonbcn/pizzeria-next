import Image from "next/image";
import Counter from "./counter/Counter";
import TrashSvg from "../svg/TrashSvg";

import { useCartContext } from "../context/CartContext";

import { formatPrice } from "@/app/utils/func";

const CheckoutRow = ({ cartItem }) => {
  const { deleteItemFromCart } = useCartContext();

  const ImageProps = {
    src: cartItem.item.image,
    width: 150,
    height: 150,
  };

  return (
    <div className="checkout-row flex items-center justify-between">
      <div className="w-1/2">
        <Image {...ImageProps} alt={`${cartItem.item.name} image`} />
      </div>
      <div className="w-1/2 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <p className="text-3xl font-extrabold">{cartItem.item.name}</p>
          {/* Delete element */}
          <TrashSvg onClick={() => deleteItemFromCart(cartItem)} />
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold">{formatPrice(cartItem.item.price)} €</p>
          {/* Set new qty */}
          <Counter cartItem={cartItem} qty={cartItem.qty} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutRow;
