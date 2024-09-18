/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#8E6D45',   // Custom primary color
        secondary: '#e4a853', // Custom secondary color
        accent: '#10b981',    // Custom accent color
        customGray: '#666',// Custom gray shade
      },
      backgroundColor:{
        yellowish: "#F8F5F0",
        darkish: "#222",
      },
      maxWidth:{
        maxw200: {
          maxWidth: "200px",
        }
      }
    },
    fontFamily: {
      "barlow": ['Barlow', 'sans-serif'],
      "barlow-condensed": ['"Barlow Condensed"', 'sans-serif'], // Wrap in quotes and array
      "gilda": ['"Gilda Display"', 'serif'], // Also wrap Gilda Display for consistency
    },
   
  },
  plugins: [],
}

