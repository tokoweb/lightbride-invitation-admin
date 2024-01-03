const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    aspectRatio: false,
  },
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "times-new-roman": ["Times New Roman", "Times", "serif"],
      },
      backgroundSize: {
        zoom2x: "120%",
      },
      colors: {
        main: "var(--main-color)",
        second: "var(--second-color)",
        background: "var(--background-color)",
        primary: {
          light: "#cca67c",
          DEFAULT: "#c69c6d",
          dark: "#b28c62",
        },
        error: {
          light: colors.red[300],
          DEFAULT: colors.red[400],
          dark: colors.red[500],
        },
        success: {
          light: colors.green[400],
          DEFAULT: colors.green[500],
          dark: colors.green[600],
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    plugin(({ addUtilities, addComponents, matchUtilities, theme }) => {
      addUtilities({
        ".MuiButton-contained": {
          "background-color": "#6366f1",
        },
      });

      addComponents({
        ".drag-none": {
          "user-drag": "none",
          "user-select": "none",
          "-moz-user-select": "none",
          "-webkit-user-drag": "none",
          "-webkit-user-select": "none",
          "-ms-user-select": "none",
        },

        ".form-title": {},
        ".form-container": {},
      });

      matchUtilities(
        {
          "bg-radient": (value) => ({
            "background-image": `radial-gradient(${value})`,
          }),
        },
        { values: theme("radialGradients") },
      );
    }),
  ],
};
