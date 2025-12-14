module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'ryou-green': '#d5ff40',
        'ryou-purple': '#58009E'
      },
      maxWidth: {
        '1200': '1200px'
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'serif': ['Merriweather', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      } 
    },
  },
  plugins: [],
};