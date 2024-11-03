/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
    colors: {
      black: "#161616",
      white: "#FFFFFF",

      primary: "#4EE486",
      "primary-300": "#81C7A4",
      "primary-700": "#388E63",

      "secondary-900": "#E65100",
      "secondary-800": "#EF6C00",
      "secondary-700": "#F57C00",
      "secondary-500": "#FF9800",

      "grey-80": "#313338",
      "grey-70": "#6C757D",
      "grey-60": "#71767E",
      "grey-50": "#9EA0A5",
      "grey-40": "#E6E8EB",
      "grey-20": "#F4F5F7",
      "grey-0": "#FCFDFF",

      danger: "#DC3535",
      success: "#28a745",
      warning: "#FFC107",
      info: "#17a2b8",
      transparent: "transparent",
    },
  },
  plugins: [],
};
