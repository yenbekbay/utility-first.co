const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

// https://access.mymind.com/colors/eyJ0IjoiUGFyYWRpc28iLCJjIjpbIiNGMkYyRjIiLCIjMDAwMDAwIiwiIzBCNjRGRSJdfQ
const palette = {
  primary: '#0B64FE',
  secondary: '#000',
  content: '#000',
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
            '--tw-prose-body': palette.content,
            '--tw-prose-headings': palette.content,
            '--tw-prose-links': palette.primary,
            '--tw-prose-bold': palette.content,
            '--tw-prose-quotes': palette.content,
            '--tw-prose-code': palette.content,
            '--tw-prose-pre-bg': palette.content,
            '--tw-prose-invert-hr': palette.content,
            '--tw-prose-invert-quote-borders': palette.content,
            '--tw-prose-invert-td-borders': palette.content,
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
