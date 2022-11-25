/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueui':"#0414C1",
      }
    },
  },
  plugins: [require("daisyui")],
}
