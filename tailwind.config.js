/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'cairo': ['Cairo', 'sans'],
        'inclusive-sans': ['Inclusive Sans', 'sans'],
        'orbitron': ['Orbitron', 'sans'],
        'poppins': ['Poppins', 'sans'],
        'sofia-sans-extra-condensed': ['Sofia Sans Extra Condensed', 'sans'],
      },
    },
  },
  plugins: [],
}
