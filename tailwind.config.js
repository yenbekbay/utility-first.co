const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

// https://access.mymind.com/colors/eyJ0IjoiUGFyYWRpc28iLCJjIjpbIiNGMkYyRjIiLCIjMDAwMDAwIiwiIzBCNjRGRSJdfQ
const palette = {
  primary: '#0B64FE',
  secondary: '#5B5B5B',
  content: colors.black,
  background: '#E7E7E7',
  mercury: {
    50: '#FFFFFF',
    100: '#FBFBFB',
    200: '#E7E7E7',
    300: '#CBCBCB',
    400: '#AFAFAF',
    500: '#939393',
    600: '#777777',
    700: '#5B5B5B',
    800: '#3F3F3F',
    900: '#232323',
  },
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
        sans: ['Manrope', ...defaultTheme.fontFamily.sans],
        serif: ['Lucette', ...defaultTheme.fontFamily.serif],
        display: ['Dinish', ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': colors.black,
            '--tw-prose-headings': colors.black,
            '--tw-prose-lead': palette.mercury[700],
            '--tw-prose-links': colors.black,
            '--tw-prose-bold': colors.black,
            '--tw-prose-counters': palette.mercury[600],
            '--tw-prose-bullets': palette.mercury[400],
            '--tw-prose-hr': palette.mercury[300],
            '--tw-prose-quotes': colors.black,
            '--tw-prose-quote-borders': palette.mercury[300],
            '--tw-prose-captions': palette.mercury[600],
            '--tw-prose-code': colors.black,
            '--tw-prose-pre-code': palette.mercury[300],
            '--tw-prose-pre-bg': palette.mercury[800],
            '--tw-prose-th-borders': palette.mercury[400],
            '--tw-prose-td-borders': palette.mercury[300],
            '--tw-prose-invert-body': palette.mercury[400],
            '--tw-prose-invert-headings': colors.white,
            '--tw-prose-invert-lead': palette.mercury[500],
            '--tw-prose-invert-links': colors.white,
            '--tw-prose-invert-bold': colors.white,
            '--tw-prose-invert-counters': palette.mercury[500],
            '--tw-prose-invert-bullets': palette.mercury[700],
            '--tw-prose-invert-hr': colors.black,
            '--tw-prose-invert-quotes': palette.mercury[200],
            '--tw-prose-invert-quote-borders': colors.black,
            '--tw-prose-invert-captions': palette.mercury[500],
            '--tw-prose-invert-code': colors.white,
            '--tw-prose-invert-pre-code': palette.mercury[400],
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': palette.mercury[700],
            '--tw-prose-invert-td-borders': colors.black,
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-radix')(),
    plugin(({addVariant}) => {
      addVariant('link-active', '&[data-link-active]')
      addVariant('link-exact-active', '&[data-link-exact-active]')
    }),
  ],
}
