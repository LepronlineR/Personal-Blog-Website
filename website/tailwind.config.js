/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#5442BD",
        red: "#EC1353",
        yellow: "#E8DA55",
        gray: "#EDEDED",
        "deep-blue": "#010026",
        "dark-gray": "#292727",
        "gray": "#403b3b",
        "light-gray": "#333030",
        "opaque-black": "rgba(0, 0, 0, 0.3)",
        "dark-purple": "#21094E",
        "pink": "#E1A5D9",
        purple: "#511281",
        "dark-cyan": "#4CA1A3",
        green: "#A5E1AD",
        "light-green": "#4bc03f",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
        rubik: ["Rubik", "sans-serif"]
      },
    },
  },
  plugins: [],
}

