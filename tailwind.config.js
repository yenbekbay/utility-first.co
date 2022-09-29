const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

// https://access.mymind.com/colors/eyJ0IjoiUGFyYWRpc28iLCJjIjpbIiNGMkYyRjIiLCIjMDAwMDAwIiwiIzBCNjRGRSJdfQ
const palette = {
  primary: '#0B64FE',
  secondary: '#5B5B5B',
  content: '#232323',
  muted: '#777777',
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
  content: ['./{components,lib/components,pages}/**/*.{ts,tsx}'],
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
            '--tw-prose-body': palette.mercury[900],
            '--tw-prose-headings': palette.mercury[900],
            '--tw-prose-lead': palette.mercury[700],
            '--tw-prose-links': palette.mercury[900],
            '--tw-prose-bold': palette.mercury[900],
            '--tw-prose-counters': palette.mercury[600],
            '--tw-prose-bullets': palette.mercury[400],
            '--tw-prose-hr': palette.mercury[300],
            '--tw-prose-quotes': palette.mercury[900],
            '--tw-prose-quote-borders': palette.mercury[300],
            '--tw-prose-captions': palette.mercury[600],
            '--tw-prose-code': palette.mercury[900],
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
            '--tw-prose-invert-hr': palette.mercury[900],
            '--tw-prose-invert-quotes': palette.mercury[200],
            '--tw-prose-invert-quote-borders': palette.mercury[900],
            '--tw-prose-invert-captions': palette.mercury[500],
            '--tw-prose-invert-code': colors.white,
            '--tw-prose-invert-pre-code': palette.mercury[400],
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': palette.mercury[700],
            '--tw-prose-invert-td-borders': palette.mercury[900],
          },
        },
        'no-spacing': {
          css: {
            p: {
              marginTop: 0,
              marginBottom: 0,
            },
            '[class~="lead"]': {
              marginTop: 0,
              marginBottom: 0,
            },
            blockquote: {
              marginTop: 0,
              marginBottom: 0,
            },
            h1: {
              marginTop: 0,
              marginBottom: 0,
            },
            h2: {
              marginTop: 0,
              marginBottom: 0,
            },
            h3: {
              marginTop: 0,
              marginBottom: 0,
            },
            h4: {
              marginTop: 0,
              marginBottom: 0,
            },
            img: {
              marginTop: 0,
              marginBottom: 0,
            },
            video: {
              marginTop: 0,
              marginBottom: 0,
            },
            figure: {
              marginTop: 0,
              marginBottom: 0,
            },
            figcaption: {
              marginTop: 0,
            },
            pre: {
              marginTop: 0,
              marginBottom: 0,
            },
            ol: {
              marginTop: 0,
              marginBottom: 0,
            },
            ul: {
              marginTop: 0,
              marginBottom: 0,
            },
            li: {
              marginTop: 0,
              marginBottom: 0,
            },
            '> ul > li p': {
              marginTop: 0,
              marginBottom: 0,
            },
            '> ul > li > *:first-child': {
              marginTop: 0,
            },
            '> ul > li > *:last-child': {
              marginBottom: 0,
            },
            '> ol > li > *:first-child': {
              marginTop: 0,
            },
            '> ol > li > *:last-child': {
              marginBottom: 0,
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: 0,
              marginBottom: 0,
            },
            hr: {
              marginTop: 0,
              marginBottom: 0,
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-radix')(),
    // ActiveLink
    plugin(({addVariant}) => {
      addVariant('link-active', '&[data-link-active]')
      addVariant('link-exact-active', '&[data-link-exact-active]')
    }),
  ],
}

function rem(px) {
  return `${round(px / 16)}rem`
}
function em(px, base) {
  return `${round(px / base)}em`
}
function round(num) {
  return num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
}
