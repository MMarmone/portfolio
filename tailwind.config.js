/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'fontserif': ['Source Serif Pro', 'Georgia', 'serif'],
      body: ['Source Serif Pro', 'Georgia', 'serif'],
    },
    extend: {
      colors: {
        dark: '#1a1a1a',
        secondcolor: '#ac9c80',
        secondcolorlight:'#d5cbb0'
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  }
}

