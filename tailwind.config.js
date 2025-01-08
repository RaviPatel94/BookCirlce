/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Playfair:["Playfair Display"],
        Lato:["Roboto"]
      },
      screens:{
        'grid3': '500px',
        'grid2': '365px',
      },
    },
  },
  plugins: [],
}

