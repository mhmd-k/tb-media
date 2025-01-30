const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#e1d8f1",
          200: "#c2b0e2",
          300: "#a489d4",
          400: "#8561c5",
          500: "#673ab7",
          600: "#522e92",
          700: "#3e236e",
          800: "#291749",
          900: "#150c25",
        },
        white: "#ffffff",
        black: "#0d1018",
      },
      backgroundColor: {
        main: "#0d1018",
        secondary: "#171d2a",
        purple: {
          100: "#e1d8f1",
          200: "#c2b0e2",
          300: "#a489d4",
          400: "#8561c5",
          500: "#673ab7",
          600: "#522e92",
          700: "#3e236e",
          800: "#291749",
          900: "#150c25",
        },
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Noto Kufi Arabic", "serif"],
    },
  },
  plugins: [],
});
