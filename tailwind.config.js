/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rick: {
          1: '#02afc5',
          2: '#35c9dd',
          3: '#87d1db',
          4: '#a9f3fd',
          5: '#4cb5c3',
        },
        'rick-green': {
          1: '#5CAD4A',
          2: '#208D45',
          3: '#A7CB54',
        },
        'rick-white': '#F0F2EB',
        'rick-black': '#0D0D0D',
      },
    },
  },
  plugins: [],
};
