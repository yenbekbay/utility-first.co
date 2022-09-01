const defaultTheme = require('tailwindcss/defaultTheme')

// https://access.mymind.com/colors/eyJ0IjoiUGFyYWRpc28iLCJjIjpbIiNGMkYyRjIiLCIjMDAwMDAwIiwiIzBCNjRGRSJdfQ
const palette = {
  primary: '#0B64FE',
  secondary: '#000',
  background: '#F2F2F2',
}

/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./{components,pages}/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: palette,
      fontFamily: {
        serif: ['"Inria Serif"', ...defaultTheme.fontFamily.serif],
        display: ['Panamera', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-headings': palette.primary,
            '--tw-prose-links': palette.primary,
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
