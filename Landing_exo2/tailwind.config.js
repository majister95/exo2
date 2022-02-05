module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    debugScreens: {
    position: ['top', 'right'],
    screens: {
      'sm': {'max': '639px'},
      'md': {'max': '767px'},
      'lg': {'max': '1023px'},
      'xl': {'max': '1279px'},
    }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    ],
}