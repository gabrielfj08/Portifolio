/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#303030ff',
        surface: '#016391ff',
        primary: '#0094d8ff',
        text: '#ffffffff',
        muted: '#d0d6e0ff',
      },
    },
  },
  plugins: [],
  
}
