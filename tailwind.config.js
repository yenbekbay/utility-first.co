const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

// https://access.mymind.com/colors/eyJ0IjoiUGFyYWRpc28iLCJjIjpbIiNGMkYyRjIiLCIjMDAwMDAwIiwiIzBCNjRGRSJdfQ
const palette = {
  primary: '#0B64FE',
  secondary: colors.black,
  content: colors.black,
  background: '#E7E7E7',
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
            '--tw-prose-lead': colors.gray[700],
            '--tw-prose-links': colors.black,
            '--tw-prose-bold': colors.black,
            '--tw-prose-counters': colors.gray[600],
            '--tw-prose-bullets': colors.gray[400],
            '--tw-prose-hr': colors.gray[300],
            '--tw-prose-quotes': colors.black,
            '--tw-prose-quote-borders': colors.gray[300],
            '--tw-prose-captions': colors.gray[600],
            '--tw-prose-code': colors.black,
            '--tw-prose-pre-code': colors.gray[300],
            '--tw-prose-pre-bg': colors.gray[800],
            '--tw-prose-th-borders': colors.gray[400],
            '--tw-prose-td-borders': colors.gray[300],
            '--tw-prose-invert-body': colors.gray[400],
            '--tw-prose-invert-headings': colors.white,
            '--tw-prose-invert-lead': colors.gray[500],
            '--tw-prose-invert-links': colors.white,
            '--tw-prose-invert-bold': colors.white,
            '--tw-prose-invert-counters': colors.gray[500],
            '--tw-prose-invert-bullets': colors.gray[700],
            '--tw-prose-invert-hr': colors.black,
            '--tw-prose-invert-quotes': colors.gray[200],
            '--tw-prose-invert-quote-borders': colors.black,
            '--tw-prose-invert-captions': colors.gray[500],
            '--tw-prose-invert-code': colors.white,
            '--tw-prose-invert-pre-code': colors.gray[400],
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': colors.gray[700],
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
