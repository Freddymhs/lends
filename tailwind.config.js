/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"], // Asegúrate de que esté apuntando a tus archivos
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
