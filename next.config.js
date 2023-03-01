// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   typescript: {
//     // !! WARN !!
//     // Dangerously allow production builds to successfully complete even if
//     // your project has type errors.
//     // !! WARN !!
//     ignoreBuildErrors: true,
//   },
//   webpack: function (config, options) {
//     config.experiments = {
//       asyncWebAssembly: true,
//       layers: true,
//     };
//     return config;
//   },
// };
// module.exports = nextConfig;

/** @type {import("next").NextConfig} */
module.exports = {
  experimental: { appDir: true },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
      asyncWebAssembly: true,
    };
    return config;
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'ipfs.io',
  //       port: '3000',
  //       pathname: 'https://ipfs.io/ipfs/',
  //     },
  //   ],
  // },
  
};
