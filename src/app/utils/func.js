export const capitalize = (text) => {
  const firstLetter = text.charAt(0);
  const rest = text.slice(1);
  return firstLetter.toUpperCase() + rest;
};

export const formatPrice = (price) => {
  if (typeof price !== "number") {
    return "Invalid price";
  }
  return price.toFixed(2).replace(".", ",");
};

export const stringToSnakeCase = (name) => {
  return name.toLowerCase().replace(/\s+/g, "_");
};

export const stringToArray = (string) => {
  return string.split(",").map((item) => item.trim());
};

// TODO: move to a new file
export const getAllProducts = async () => {
  const res = await fetch(`http://localhost:3000/api/productos/todos`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
