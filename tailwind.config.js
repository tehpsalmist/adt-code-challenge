const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.MODE !== 'development',
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.tsx'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: colors.orange,
        secondary: {
          ...colors.emerald
        }
      },
      minHeight: theme => ({
        ...theme('spacing')
      }),
      maxHeight: theme => ({
        ...theme('spacing')
      }),
      minWidth: theme => ({
        ...theme('spacing')
      }),
      maxWidth: theme => ({
        ...theme('spacing')
      }),
      inset: theme => ({
        ...theme('spacing')
      }),
      spacing: {
        36: '9rem',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        '100vw': '100vw',
        content: 'calc(100vh - 3rem)'
      },
      boxShadow: {
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 -1px 4px -1px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
