/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        mobile: '375px',
        desktop: '1440px'
      },
      colors: {
        'primary-purple': 'hsl(259, 100%, 65%)',
        'primary-light-red': 'hsl(0, 100%, 67%)',

        'neutral-white': 'hsl(0, 0%, 100%)',
        'neutral-off-white': 'hsl(0, 0%, 94%)',
        'neutral-light-grey': 'hsl(0, 0%, 86%)',
        'neutral-smokey-grey': 'hsl(0, 1%, 44%)'
      },
      fontFamily: {
        sans: ['var(--font-poppins)']
      }
    }
  },
  plugins: [require('tailwindcss-debug-screens')]
};
