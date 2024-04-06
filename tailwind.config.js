/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['outfit', 'sans-serif']
      },
      colors: {
        'text-dark': 'hsl(218, 44%, 22%)',
        background: 'hsl(212, 45%, 89%)',
        'text-light': 'hsl(220, 15%, 55%)'
      },
    },
  },
  plugins: [

  ],
}