/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          primary: '#087A3D',
          deep: '#064D2C',
          secondary: '#2E9E52',
          light: '#EAF7EC',
          soft: '#F5FBF5',
          cream: '#FFFDF6',
          yellow: '#F4C95D',
          amber: '#E5A93C',
          earth: '#8A6239',
          text: '#183028',
          muted: '#61706A',
          border: '#DCE8DF',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        kannada: ['"Noto Sans Kannada"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 2px 10px rgba(6, 77, 44, 0.04)',
        card: '0 4px 20px -2px rgba(6, 77, 44, 0.08)',
        hover: '0 12px 30px -4px rgba(6, 77, 44, 0.12)',
        nav: '0 4px 20px rgba(8, 122, 61, 0.06)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
