module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'main': "url('/images/backgrounds/main-bg.jpeg')",
      }),
      scale: {
        '65': '.65',
      },
      textColor: {
        'text-theme': '#5F6369',
      },
      height: {
        '112': '26rem',
        '126': '28rem',
        '144': '32rem',
        '162': '38rem',
        '170': '46rem',
        '188': '56rem',
        '206': '68rem'
      },
      minHeight: {
        '96': '24rem',
        '112': '26rem',
        '126': '28rem',
        '144': '32rem',
        '162': '38rem',
        '170': '46rem',
        '188': '56rem',
        '206': '68rem',
        '320': '320px'
      },
      boxShadow: {
        blue: '0 4px 14px 0 rgba(19, 51, 81, 0.39)',
        theme: '0 1px 3px 0 rgba(157, 23, 77, 0.4), 0 1px 2px 0 rgba(157, 23, 77, 0.06)',
      }
    },
  },
  variants: {
    extend: {},
  }
}
