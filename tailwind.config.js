/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-raleway)', 'system-ui', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
      },
      colors: {
        gray: {
          brand: 'var(--gray-brand)',
          dark: 'var(--gray-dark)',
          50: 'var(--gray-50)',
          60: 'var(--gray-60)',
          80: 'var(--gray-80)',
        },
        orange: {
          brand: 'var(--orange-brand)',
          80: 'var(--orange-80)',
          90: 'var(--orange-90)',
        },
        purple: {
          brand: 'var(--purple-brand)',
          90: 'var(--purple-90)',
        },
        black: 'var(--black)',
        white: 'var(--white)',
      },
    },
  },
  plugins: [],
}

