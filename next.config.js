const {withPlaiceholder} = require('@plaiceholder/next')
const {withContentlayer} = require('next-contentlayer')

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlaiceholder(
  withContentlayer({
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      newNextLinkBehavior: true,
    },
  }),
)
