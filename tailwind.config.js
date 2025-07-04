// tailwind.config.js

import typography from '@tailwindcss/typography'; // Mantenha o import

/** @type {import('tailwindcss').Config} */
export default { // Use 'export default'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#0D1117',
        'brand-secondary': '#161B22',
        'brand-tertiary': '#21262D',
        'brand-accent': '#58A6FF',
        'brand-text': '#C9D1D9',
        'brand-subtle': '#8B949E',
        'status-green': '#238636',
        'status-blue': '#388BFD',
        'status-yellow': '#D29922',
        'status-red': '#DA3633',
        'status-purple': '#8957E5',
        'status-gray': '#6E7681',
      },
    },
  },
  plugins: [
    typography,
  ],
}