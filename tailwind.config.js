/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Poppins':'Poppins, Playfair Display',
      },
      colors:{
        'footer':"#123557",
      }
    },
  },
  plugins: [],
}

