/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Kanit: ['Kanit', 'sans-serif'],
      },
      colors:{
        bgPrimary: " rgba(133, 133, 133, 0.26)"
      },
      keyframes:{
        floatingrotation : {
          "0%":{
            transform: "translate(0, 0) rotate(0);"
          },
          "50%": {
            transform: "translate(0, -10px) rotate(180deg)"
          },
          "100%": {
            transform: "translate(0, 0) rotate(360deg)"
          }
        }
      },
      animation: {
        floatingrotation: "floatingrotation 40s infinite linear"
      } 
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}