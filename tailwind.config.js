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
        primary: "#588a7b",
        "primary-dark": "#3a6659",
      },
    },
  },
  plugins: [],
};
