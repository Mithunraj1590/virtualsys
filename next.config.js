/** @type {import('next').NextConfig} */

// const withPlugins = require("next-compose-plugins");
// const withVideos = require("next-videos");
// const CompressionPlugin = require("compression-webpack-plugin");

const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "swiperjs.com",
      "192.168.3.244:1337",
      "192.168.3.244",
      // "dev-nuve.webc.in",
      "images.unsplash.com",
    ],
  },
  // Use .env/.env.local for environment variables; avoid inlining here
  // experimental: {
  //   scrollRestoration: true,
  // },
  webpack: (config) => {
    // Alias legacy deps to local shims to avoid peer conflicts
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-intl-tel-input": path.resolve(
        __dirname,
        "src/shims/react-intl-tel-input.js"
      ),
      "react-intl-tel-input/dist/main.css": path.resolve(
        __dirname,
        "src/shims/react-intl-tel-input.css"
      ),
    };
    return config;
  },
};

// module.exports = withPlugins([withVideos], nextConfig);
module.exports = nextConfig;
