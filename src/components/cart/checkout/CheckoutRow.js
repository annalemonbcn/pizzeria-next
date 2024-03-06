import Image from "next/image";
import TrashSvg from "../../svg/TrashSvg";

import { useCartContext } from "../../context/CartContext";

import { formatPrice } from "@/app/utils/func";
import Counter from "@/components/counter/Counter";

// TODO: refactor inner component
const CheckoutRow = ({ cartItem }) => {
  const { deleteItemFromCart } = useCartContext();

  const imageProps = {
    src: cartItem.item.image,
    width: 125,
    height: 125,
  };

  const counterProps = {
    cartItem,
    qty: cartItem.qty,
    updateCart: true,
  };

  return (
    <div className="checkout-row flex items-center justify-between">
      <div className="w-1/2">
        <Image {...imageProps} alt={`${cartItem.item.name} image`} />
      </div>
      <div className="w-1/2 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <p className="text-xl lg:text-3xl font-extrabold">{cartItem.item.name}</p>
          <TrashSvg onClick={() => deleteItemFromCart(cartItem)} />
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold">{formatPrice(cartItem.item.price)} €</p>
          {/* Set new qty */}
          <Counter {...counterProps} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutRow;
