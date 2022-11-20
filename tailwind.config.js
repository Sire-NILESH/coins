/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgLightMode: "#f5fafc",
      },
      fontFamily: {
        poppins: ["Poppins"],
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
