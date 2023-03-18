/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "half-screen-height": "50vh",
      },
      colors: {
        "black-transparent": "#000000cc",
        primary: "#638870",
        "primary-dark": "#4B6253",
      },
    },
  },
  plugins: [],
};
