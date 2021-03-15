module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Cousine', 'monospace'],
          },
          colors: {
              pale: '#fdf9f3',
              dark: '#2c292d',
              yellow: '#ffd866',
              pink: '#ff6188',
              darkGray: '#bcbbbb',
              darkerGray: '#dcdbdb'
          },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
