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
        'text-gradient': 'linear-gradient(90deg, #A1F596 0%, #C2EBBD 17%, #ACFCE9 35%, #A3F6FF 57%, #6AF0FF 79%, #00E5FF )',
        'radial-grad': 'radial-gradient(circle at center, #FFFFFF, #FAD0C4)',
      },
    },
    fontFamily:{
      'Milonga': 'milonga',
      'Oufit':'oufit',
      'Roboto': 'roboto',
      'Poetsen_One': '"Poetsen One"',
    }
  },
  plugins: [],
}