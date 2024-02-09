/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "40rem",
      },
      colors: {
        black: '#1F1F1F',
        grayLight: "#C8C8C8",
        grayText: "#6F6F6F"
      },
      screens: {
        xl: { max: "1680rem" },
        lg: { max: "1520px" },
        md: { max: "1240px" },
        sm: { max: "1024px" },
        xs: { max: "680px" },
      },


    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "1740rem",
          // "@screen xl": {
          //     maxWidth: "1560px",
          // },
          // "@screen lg": {
          //     maxWidth: "1280px",
          // },
          // "@screen md": {
          //     maxWidth: "1054px",
          //     padding: "0 15px",
          // },
          // "@screen sm": {
          //     maxWidth: "882px",
          // },
          // "@screen xs": {
          //     maxWidth: "520px",
          // },
        },
      });
    },
  ],
};
