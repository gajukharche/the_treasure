/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#2d2d2d',
        accent: '#c0a062', // Gold
        text: '#e0e0e0',
        heading: '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-outfit)'],
        playfair: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
};
