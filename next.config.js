
/** @type {import("next").NextConfig} */
module.exports = {
  images: {
    domains: ['gateway.ipfs.io'],
  },
  experimental: { appDir: true },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
      asyncWebAssembly: true,
    };
    return config;
  },

  
};
