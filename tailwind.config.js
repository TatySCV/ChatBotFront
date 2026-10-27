/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#523978",
        secondary: "#343540",
        black: "#202123",
        white: "#f9f9f9",
        purple: "#963978"
      },
    },
  },
  plugins: [],
}

