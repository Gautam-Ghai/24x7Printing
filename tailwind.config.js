/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      bgColor: "#FDFDFD",
      ImgColor: "#BCE896",
      textColor: "#0A0F06",
      primary: "#446F2D",
      secondary: "#E9e9e9",
    }
  },
  plugins: [],
}
