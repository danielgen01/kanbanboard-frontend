/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors:{
        "dark-purple":"#635FC7",
        "bright-purple":"#A8A4FF",
        "darkest-black":"#000112",
        "dark-black":"#20212C",
        "bright-black":"#2B2C37",
        "dark-gray":"#3E3F4E",
        "medium-gray":"#828FA3",
        "bright-gray":"#E4EBFA",
        "dark-white":"#F4F7FD",
        "white":"#FFFFF",
        "dark-red":"#EA5555",
        "bright-red":"#FF9898"
      }
    },
  },
  plugins: [],
}