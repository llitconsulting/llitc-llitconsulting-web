/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{md,html}",
    "./themes/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        "brand-green": {
          DEFAULT: "#144734",
          dark: "#0d3326",
          light: "#1e6349",
        },
        "brand-gray": {
          DEFAULT: "#414042",
          light: "#6b6b6e",
          lighter: "#9b9b9e",
        },
      },
      fontFamily: {
        chakra: ['"Chakra Petch"', "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
