/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-main": "#B72A23",
        cream: "#ecebe6",
        "black-main": "#2D2D2D",
        "gray-main": "#d4d4d8",
      },
    },
  },
  // plugins: [
  //   function ({ addBase, theme }) {
  //     const colors = theme("colors");
  //     addBase({
  //       "h1, h2, h3, h4, h5, h6": {
  //         color: colors["red-main"],
  //       },
  //     });
  //   },
  // ],
};
