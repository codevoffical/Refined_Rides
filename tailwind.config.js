/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lightGrey: "#707070",
        darkGreen: "#096A56",
        darkGrey: "#26282b",
        iconColor:"#b0b0b0",
        darkIcon:"#353F4E"
      },
    },
  },
  plugins: [],
}
