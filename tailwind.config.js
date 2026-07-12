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
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5E6B8',
          dark: '#B8960F',
          50: '#FDF8F0',
          100: '#F5E6B8',
          200: '#EDD488',
          300: '#E5C458',
          400: '#D4AF37',
          500: '#B8960F',
          600: '#9A7D0C',
          700: '#7C6409',
          800: '#5E4B06',
          900: '#403203',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(212, 175, 55, 0.15)',
        'gold-lg': '0 8px 40px rgba(212, 175, 55, 0.25)',
        'gold-xl': '0 12px 60px rgba(212, 175, 55, 0.35)',
        'premium': '0 20px 60px rgba(0, 0, 0, 0.5)',
        'premium-gold': '0 20px 60px rgba(212, 175, 55, 0.08)',
      },
      backdropBlur: {
        'premium': '20px',
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-gold': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F5E6B8 0%, #D4AF37 50%, #B8960F 100%)',
        'gold-gradient-subtle': 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
      },
      letterSpacing: {
        'premium': '0.02em',
        'premium-wide': '0.05em',
        'premium-wider': '0.1em',
      },
    },
  },
  plugins: [],
}