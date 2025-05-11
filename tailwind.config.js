// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-night": "#0A0F1C",
        "particle-grayblue": "#7FA8C7",
        "brand-blue": "#29b5ff", // ou ta couleur existante
      },
    },
  },
  plugins: [],
};
