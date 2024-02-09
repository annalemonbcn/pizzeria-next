const Dotenv = require("dotenv-webpack");

module.exports = {
  // ... configuración de webpack
  plugins: [
    new Dotenv({
      path: "./.env",
      safe: true,
    }),
  ],
};
