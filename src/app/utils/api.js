export const getAllProducts = async () => {
  const res = await fetch(`http://localhost:3000/api/productos/todos`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
