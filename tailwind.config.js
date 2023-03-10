/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{  
         'black': '#000000',
    'white': '#FFFFFF',
    'blue-brand': '#3070B3',
    'blue-dark': '#072140',
    'blue-dark-1': '#0A2D57',
    'blue-dark-2': '#0E396E',
    'blue-dark-3': '#114584',
    'blue-dark-4': '#14519A',
    'blue-dark-5': '#165DB1',
    'blue-light': '#5E94D4',
    'blue-light-1': '#9ABCE4',
    'blue-light-2': '#C2D7EF',
    'blue-light-3': '#D7E4F4',
    'blue-light-4': '#E3EEFA',
    'blue-light-5': '#F0F5FA',
    'yellow': '#FED702',
    'yellow-dark': '#CBAB01',
    'yellow-1': '#FEDE34',
    'yellow-2': '#FEE667',
    'yellow-3': '#FEEE9A',
    'yellow-4': '#FEF6CD',
    'orange': '#F7B11E',
    'orange-dark': '#D99208',
    'orange-1': '#F9BF4E',
    'orange-2': '#FAD080',
    'orange-3': '#FCE2B0',
    'orange-4': '#FEF4E1',
    'orange-danger': '#C24814',
    'pink': '#B55CA5',
    'pink-dark': '#9B468D',
    'pink-1': '#C680BB',
    'pink-2': '#D6A4CE',
    'pink-3': '#E6C7E1',
    'pink-4': '#F6EAF4',
    'blue-bright': '#8F81EA',
    'blue-bright-dark': '#6955E2',
    'blue-bright-1': '#B6ACF1',
    'blue-bright-2': '#C9C2F5',
    'blue-bright-3': '#DCD8F9',
    'blue-bright-4': '#EFEDFC',
    'red': '#EA7237',
    'red-dark': '#D95117',
    'red-1': '#EF9067',
    'red-2': '#F3B295',
    'red-3': '#F6C2AC',
    'red-4': '#FBE4DA',
    'green': '#9FBA36',
    'green-dark': '#7D922A',
    'green-1': '#B6CE55',
    'green-2': '#C7D97D',
    'green-3': '#D8E5A4',
    'green-4': '#E9F1CB',
    'grey-1': '#20252A',
    'grey-2': '#333A41',
    'grey-3': '#475058',
    'grey-4': '#6A757E',
    'grey-5': '#ABB5BE',
    'grey-6': '#CDD4DB',
    'grey-7': '#DDE2E6',
    'grey-8': '#E8ECEF',
    'grey-9': '#F8F9FA',
      },
      fontFamily:{
        "roboto-500":"'roboto-500','arial'",
        "roboto-700":"'roboto-700','arial'",
        "roboto-regular":"'roboto-regular','arial'",
      },
    },
  },
  plugins: [],
}
