/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#25396F",
          black: "#222222",
          green: "#17CE89",
          red: "#E42C66",
          gray: "#7C8DB5",
          input: "#646A86",
          light: "#F5F6F8",
          shadow: "#AEAEC033",
        },
        green: {
          deep: "#134611",
          semideep: "#3E8914",
          normal: "#3DA35D",
          light: "#96E072",
          faint: "#E8FCCF",
        },
        button: {
          gray: "#7C8DB5",
          "light-gray": "#F5F6F8",
        },
        text: {
          primary: "#25396F",
        },
      },
      fontFamily: {
        circular: "Circular, sans-serif",
        poppins: "Poppins, sans-serif",
      },
    },
  },
};
