/** @type {import("next").NextConfig} */
module.exports = {
  images: {
    domains: ["gateway.ipfs.io"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://ibex-dao-rose.vercel.app/",
      },
    ],
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
