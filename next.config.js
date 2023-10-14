/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.producthunt.com",
        port: "",
        pathname:
          "/widgets/embed-image/v1/follow.svg",
      },
    ],
  },
};

module.exports = nextConfig;
