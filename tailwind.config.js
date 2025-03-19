/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBg: "#030612",
      },
      fontFamily: {
         DMSans:[ "DM Sans","sans-serif"], 
      },
    },
  },
  plugins: [],
}

