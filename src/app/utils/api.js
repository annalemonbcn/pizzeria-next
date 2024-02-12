export const getAllProducts = async (categoria = "todos") => {
  const res = await fetch(`http://localhost:3000/api/productos/${categoria}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getSingleProduct = async (id) => {
  const res = await fetch(`http://localhost:3000/api/product/${id}`, {
    cache: "no-store"
  })

  if(!res.ok){
    throw new Error("Failed to fetch single pizza")
  }

  return res.json();
}