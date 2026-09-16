/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          orange: '#FF9D50',
          'orange-hover': '#f0893a',
          cream: '#FFF9D8',
          teal: '#1DCED8',
          'teal-hover': '#16b7c0',
          green: '#55E07E',
          'green-hover': '#42cb6c',
        },
        coffee: {
          yellow: '#FFDD00',
          hover: '#e6c700',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'brand': '0 10px 25px -5px rgba(255, 157, 80, 0.25), 0 8px 10px -6px rgba(255, 157, 80, 0.15)',
        'teal-glow': '0 10px 25px -5px rgba(29, 206, 216, 0.25)',
        'dark-card': '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
