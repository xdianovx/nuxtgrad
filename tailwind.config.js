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
        padding: '20px',
        screens: {
          "2xl": '1720px'
        }
      },
      colors: {
        black: '#1F1F1F',
        grayLight: "#C8C8C8",
        grayText: "#6F6F6F"
      },
   

    },
  },
  plugins: [],
};
