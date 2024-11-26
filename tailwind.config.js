/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        schoolGold: '#FFB400', // Define your custom color
      },
      borderColor: {
        schoolGold: '#FFB400', // Add your custom border color here
         blackBorder: '#002855'
      },
      borderWidth: {
        '12': '12px',
      },
    },
  },
  plugins: [],
}
