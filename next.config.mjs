/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://todo-backend-ebon-pi.vercel.app/:path*", // Proxy to Backend
      },
    ];
  },
};

export default nextConfig;
