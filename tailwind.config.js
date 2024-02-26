/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        //primary: "#46404E",
        secondary: "white",
        tertiary: "#202020",
        "black-100": "#100d25",
        "black-200": "#020325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #000000",
        neon: "0 0 3px theme('colors.purple.300'), 0 0 10px theme('colors.purple.700')"
      },
      screens: {
        xs: "450px",
        sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      },
      backgroundImage: {
        primary: "url('/src/assets/herobg.jpg')",
        sec: "url('/src/assets/6.jpg')",
        third: "url('/src/assets/18.jpg')",
        night: "url('/src/assets/herobg123.jpg')",

      },
      tertiaryGradient:  "linear-gradient(to right, #A6AAA3, #aaa6c3)",
    },
  },
  plugins: [],
};