export const getAllProducts = async (category = "all") => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/products/${category}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

// TODO: change localhost urls for relative urls (?)
export const getSingleProduct = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch single pizza");
  }

  return res.json();
};
