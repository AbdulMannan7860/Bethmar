/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accentRed: {
          DEFAULT: "#e22823",
          light: "#ef4a46",
          dark: "#a91c1a",
        },
        accentGreen: {
          DEFAULT: "#089a27",
          light: "#27b344",
          dark: "#06791f",
        },
        primary: {
          DEFAULT: "#1c1c1e",
          light: "#383838",
          dark: "#000000",
        },
      },
    },
  },
  plugins: [],
};
