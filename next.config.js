/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@mercadopago/sdk-react'])

const nextConfig = withTM({
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    GOOGLE_CLIENT_ID:
      '982531789593-5o2e36pu6n7amhtpsblrrqahsl3jg4a8.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
    NEXTAUTH_SECRET: 'LlKq6ZtYbr+hTC073mAmAh9/h2HwMfsFo4hrfCx6gts=',
  },
})

module.exports = nextConfig
