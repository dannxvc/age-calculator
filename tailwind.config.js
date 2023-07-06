/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      white: "#FFFFFF",
      gray: "#D6D6D6",
      gray_light: "#F0F0F0",
      gray_md: "#878787",
      gray_dark: "#A7A7A7",
      black: "#000000",
      purple: "#844DFF",
      black_md: "#151515",
    },
    fontFamily: {
      body: "Poppins, sans-serif",
    },
  },
  plugins: [],
};
