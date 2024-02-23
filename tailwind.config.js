/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        primaryViolet:"#B00BE6",
        mildViolet:"#D08AE6",
        lightViolet:"#F8DEFF",
        primaryWhite:"#FEFAFF",
        primaryGray:"878787",
      },
      height:{
        h7:"7vh",
        h93:"93vh"
      },
      minWidth:{
        mw70:"70%"
      }

    },
  },
  plugins: [],
}