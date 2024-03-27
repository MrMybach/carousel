/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fade: 'fadeIn .3s ease-in-out',
      },
      keyframes: theme => ({
        fadeIn: {
          '0%': { backgroundColor: theme('colors.white') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [],
}
