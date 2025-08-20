/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // firaNormal: ["F]
      },
      colors: {
        dark: '#1f1f1f',
        light: '#F7F7F7',
        darkO: 'rgba(31, 31, 31, 0.2)',
        lightO: 'rgba(247, 247, 247, 0.2)',
        darkC: 'rgba(31, 31, 31, 0.9)',
        pinkC: 'rgba(247, 44, 91, 0.8)',
        grayC: '#444444',
        redC: '#DA0037',
        lightC: '#EDEDED',
        shadow: '#F93827',
        greenE: '#77D970',
        yellowE: '#FFC300',
        purpleE: '#9772FB',
        redE: '#F55050',
        blueE: '#5463FF',
        pink: '#5409DA',
      },
      backgroundImage: {
        'grid-black': `
    linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
  `,
        'grid-white': `
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
  `,
        'grid-black-05':
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        'grid-white-05':
          "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
      },
      backgroundSize: {
        grid: '24px 24px',
      },
    },
  },
  plugins: [],
}
