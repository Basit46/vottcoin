/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/my-widget.es/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        vsm: "500px",
        xmd: "950px",
        "2xl": "1600px",
      },
      fontFamily: {
        MavenPro: ["Maven Pro", "sans-serif"],
        Knewave: ["Knewave", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Rajdhani: ["Rajdhani", "sans-serif"],
        Boogaloo: ["Boogaloo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
