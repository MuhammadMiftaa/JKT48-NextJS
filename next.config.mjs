import nextPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = nextPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})({
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "pbs.twimg.com",
      "jkt48.com",
      "res.cloudinary.com",
    ],
  },
});

export default nextConfig;
