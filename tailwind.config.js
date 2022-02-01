module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'new-game-dark-blue': '#223547',
        'new-game-light-blue': '#15659D',
        'new-game-success-green': '#34C759',
        'new-game-error-red': '#FF3B30'       
      }
    },
  },
  plugins: [],
}