/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "half-screen-height": '50vh'
      },
      colors: {
        "black-transparent": "#000000aa",
        primary: "#638870",
      },
    },
  },
  plugins: [],
};
