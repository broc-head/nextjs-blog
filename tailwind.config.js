module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#263D42', //shadowbox
        'yellow': '#E7B57C', //middle yellow red
        'desert': '#DAAE7B', //burlywood
        'purple': '#6A75CC', //violet blue crayola
        'purple-light': '#AAAFD9', //wild blue yonder
        'pink': '#C4B1AE',
        'cam': '#C3DECC', //cambridge blue
        'gray': '#7E7F83',
        'jet': '#34312D',
        'green': '#0E402D',
        'red': '#B80A31',
        'blue': '#1849AB' //cobalt blue
      },
      li: {
        DEFAULT: 'list-disc'
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
        'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: [],
      },
    },
  },
  plugins: [],
}
