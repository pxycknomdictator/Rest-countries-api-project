/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["*"],
  darkMode : "class",
  theme: {
    extend: {
      screens: {
        mysm: "475px",
        myssm: "300px"
      },
      colors: {
        header: "#2B3743",
        card: "#202D36",
        body : "#202D36",
        white: "#ffffff"
      }
    },
  },
  plugins: [],
}

