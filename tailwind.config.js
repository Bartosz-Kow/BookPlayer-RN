/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./(tabs)/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#181A1A",
        "text-primary": "#FFFFFF",
        "text-secondary": "#EAF4F4",
        "button-primary": "#CDE7BE",
        "icons-primary": "#EAF4F4",
      },
      fontFamily: {
        sniglet: ["Sniglet-Regular", "sans-serif"],
        abhaya: ["AbhayaLibre-Medium", "serif"],
        baskerville: ["Baskervville-Italic", "serif"],
        candal: ["Candal-Regular", "sans-serif"],
        "space-mono": ["SpaceMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
