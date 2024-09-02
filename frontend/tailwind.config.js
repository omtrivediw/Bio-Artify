/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'combo-gradient': 'linear-gradient(132deg, #0F0A30 25%, #08051A 38%)',
        'radial-grad': 'radial-gradient(circle at center, #FFFFFF, #FAD0C4)',
      },
    },
    fontFamily:{
      'Milonga': 'milonga',
      'Oufit':'oufit',
      'Roboto': 'roboto',
    }
  },
  plugins: [],
}