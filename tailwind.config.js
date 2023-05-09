/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("@tailwindcss/aspect-ratio")],
  important: true,
  theme: {
    fontFamily: {
      sans: ["open-sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "ibex-pattern": "url('/49.png')",
        "ibex-pattern2": "url('/9.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
