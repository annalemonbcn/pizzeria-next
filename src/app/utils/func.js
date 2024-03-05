export const capitalize = (str) => {
  const firstLetter = str.charAt(0);
  const rest = str.slice(1);
  return firstLetter.toUpperCase() + rest;
};

export const removeUnderscores = (str) => {
  return (str = str.replace(/_/g, " "));
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

export const stringToArray = (str) => {
  return str.split(",").map((item) => item.trim());
};
