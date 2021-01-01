const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.blueGray
      },
      container: {
        center: true,
        padding: "1rem"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
