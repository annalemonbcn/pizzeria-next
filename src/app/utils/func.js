import { menuLinks } from "@/mock/menuLinks";

const capitalize = (str) => {
  const firstLetter = str.charAt(0);
  const rest = str.slice(1);
  return firstLetter.toUpperCase() + rest;
};

const removeUnderscores = (str) => {
  return (str = str.replace(/_/g, " "));
};

const formatPrice = (price) => {
  if (typeof price !== "number") {
    return "Invalid price";
  }
  return price.toFixed(2).replace(".", ",");
};

const stringToSnakeCase = (name) => {
  return name.toLowerCase().replace(/\s+/g, "_");
};

const stringToArray = (str) => {
  return str.split(",").map((item) => item.trim());
};

const findMenuHref = (stringToFind) => {
  const menuLink = menuLinks.find((item) => item.label.includes(stringToFind));
  return menuLink.href;
};

export {
  capitalize,
  removeUnderscores,
  formatPrice,
  stringToSnakeCase,
  stringToArray,
  findMenuHref as findMenulink,
};
