const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.indigo[400],
          DEFAULT: colors.indigo[500],
          dark: colors.indigo[600],
        },
        warning: {
          light: colors.red[400],
          DEFAULT: colors.red[500],
          dark: colors.red[600],
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addBase, addUtilities, theme }) => {
      addBase({
        // Typography styling
        h1: {
          fontSize: "3rem",
          fontWeight: theme("fontWeight.medium"),
          lineHeight: theme("lineHeight.tight"),
        },
        h2: {
          fontSize: "2.5rem",
          lineHeight: theme("lineHeight.8"),
          fontWeight: theme("fontWeight.medium"),
        },
        h3: {
          fontSize: "1.5rem",
          fontWeight: theme("fontWeight.medium"),
        },
        h4: {
          fontWeight: theme("fontWeight.medium"),
          marginBottom: "1.5rem",
        },
        section: {
          paddingTop: theme("padding.16"),
          paddingBottom: theme("padding.16"),
        },
        th: {
          padding: theme("padding.1"),
          fontWeight: theme("fontWeight.normal"),
          verticalAlign: "top",
          maxWidth: "350px",
        },
      });

      addUtilities({
        ".MuiButton-contained": {
          "background-color": "#6366f1",
        },
      });
    }),
  ],
};
