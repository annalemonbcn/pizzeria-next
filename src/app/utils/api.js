export const getAllProducts = async (category = "all") => {
  const res = await fetch(`http://localhost:3000/api/products/${category}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

// TODO: change localhost urls for relative urls (?)
export const getSingleProduct = async (id) => {
  const res = await fetch(`http://localhost:3000/api/product/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch single pizza");
  }

  return res.json();
};
