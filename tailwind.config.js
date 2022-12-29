const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'accordian-menu-open': 'accordian-menu-open 0.5s ease',
        'accordian-menu-close': 'accordian-menu-close 0.5s ease',
        'slide' : 'slide 3s ease-in-out'
      },
      keyframes: {
        'accordian-menu-open': {
          '0%' : {'height': '0%', 'opacity': '0'},
          '100%': {height: '100%', opacity: '1'}
        },
        'accordian-menu-close': {
          '0%' : {'height': '100%', 'opacity': '1'},
          '100%': {height: '0%', opacity: '0'}
        },
        'slide':{
          'from' : { 'paddingTop': '50%', width: '100%' },
          'to' : { 'paddingTop': '0%', width: '100%' }
        }
      },
      screens: {
        'mobile': '375px',
        // => @media (min-width: 640px) { ... }
  
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        'main-color':'#32A852',
        'light-black':'#555555',
        'light-grey':'#888888',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
