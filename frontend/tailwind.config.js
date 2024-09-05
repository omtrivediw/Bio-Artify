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
        'hv-text-gradient': 'linear-gradient(90deg, #00E5FF 0%, #6AF0FF 13%, #A3F6FF 35%, #ACFCE9 57%, #C2EBBD 79%, #A1F596 )',
        'radial-grad': 'radial-gradient(circle at center, #FFFFFF, #FAD0C4)',
      },
    },
    rotate:{
      '115': '115deg',
    },
    fontFamily:{
      'Milonga': 'Milonga',
      'Outfit':'Outfit',
      'Roboto': 'Roboto',
      'Poetsen_One': '"Poetsen One"',
    }
  },
  plugins: [],
}