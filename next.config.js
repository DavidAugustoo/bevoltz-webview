/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    GOOGLE_CLIENT_ID:
      '982531789593-5o2e36pu6n7amhtpsblrrqahsl3jg4a8.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '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',
  },
}

module.exports = nextConfig
