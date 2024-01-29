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
