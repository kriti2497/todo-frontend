/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // {
      //   source: "/api/:path",
      //   destination: "http://localhost:3001/:path", // Proxy to Backend
      // },
      // {
      //   source: "/api/:path/:id",
      //   destination: "http://localhost:3001/:path/:id", // Proxy to Backend
      // },
      {
        source: "/api/:path/:id*",
        destination: "http://localhost:3001/:path/:id*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
