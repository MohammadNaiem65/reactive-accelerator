/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [new URL("https://source.unsplash.com/**")],
  },
};

export default nextConfig;
