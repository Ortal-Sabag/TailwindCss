/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"], //generate the css according all the html and js files, js for all the changes css by js code.
  theme: {
    extend: {
      screen: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)'}, //3/2 more width from hight
        'tallscreen': { 'raw': '(min-aspect-ratio: 13/20)'}, //13/20 more hight from width
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

