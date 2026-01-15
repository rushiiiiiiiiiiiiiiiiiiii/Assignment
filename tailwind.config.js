/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5BAF26",
        secondary: "#FFDA00",
        blue: "#1D69AC",

        heading: "#1F2937",
        body: "#000000",

        white: "#FFFFFF",
        impactBg: "#5BAF2680",
      },

      fontFamily: {
        parkinsans: ["Parkinsans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
