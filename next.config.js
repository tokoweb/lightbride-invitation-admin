/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        pathname: "/**",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
