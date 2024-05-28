/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: "Oswald",
        sourceSans3: "SourceSans3"
      },
      colors: {
        blue: '#B1DEFF',
        black: "#141414",
        white: "#EDEDEF"
      }
    },
  },
  plugins: [],
}

