import {heroui} from "@heroui/theme"
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [ heroui(),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-always': {
          'overflow-y': 'scroll',
        },
        '.scrollbar-always::-webkit-scrollbar': {
          width: '12px',
        },
        '.scrollbar-always::-webkit-scrollbar-thumb': {
          borderRadius: '10px',
          backgroundColor: '#999',
        },
      });
    }),
  ],
}
