/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        'light-white':'#D9D9D9',
        'light-gray':'#3B3B42',
        'brand-blue':'#443eff',
        'brand-dark-blue':'#1b1e6a',
        'brand-teal-light':'#29bcb7'
      }
    },
  },
  plugins: [],
}