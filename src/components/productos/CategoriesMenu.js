import Link from "next/link";

const CategoriesMenu = () => {
  return (
    <div className="flex gap-4">
      {/* <Link href={"/delivery/todos"}>Todos</Link>
      <Link href={"/delivery/pizza_rossa"}>Pizza rossa</Link>
      <Link href={"/delivery/pizza_bianca"}>Pizza bianca</Link> */}
      <a href={"/delivery/todos"}>Todos</a>
      <a href={"/delivery/pizza_rossa"}>Pizza rossa</a>
      <a href={"/delivery/pizza_bianca"}>Pizza bianca</a>
    </div>
  );
};

export default CategoriesMenu;
