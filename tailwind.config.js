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
        "red-main": "#FF5E5B",
        "black-main": "#131515",
        headings: "#252422",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      const colors = theme("colors");
      addBase({
        "h1, h2, h3, h4, h5, h6": {
          color: colors["headings"],
        },
      });
    },
  ],
};
