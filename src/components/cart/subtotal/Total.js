import { formatPrice } from "@/app/utils/func";

const Total = ({ totalCartprice }) => {
  return (
    <div className="total w-1/2 mt-8 pt-3 border-t border-zinc-300">
      <p className="text-xl">Total Checkout</p>
      <p className="mt-1 font-bold text-4xl text-red-400">
        {formatPrice(totalCartprice)} €
      </p>
    </div>
  );
};

export default Total;
