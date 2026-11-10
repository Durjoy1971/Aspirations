import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "firebasestorage.googleapis.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
      { protocol: "https", hostname: "i.ibb.co" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
  cacheComponents: true,
  partialPrefetching: true,
  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/kid",
        destination: "/kids",
        permanent: true,
      },
      {
        source: "/blog001",
        destination: "/blog/learn-to-code-beginners-edition",
        permanent: true,
      },
      {
        source: "/blog002",
        destination: "/blog/4-key-points-in-data-science",
        permanent: true,
      },
      {
        source: "/blog003",
        destination: "/blog/key-points-of-web-development",
        permanent: true,
      },
      {
        source: "/blog004",
        destination: "/blog/essentials-of-mobile-development",
        permanent: true,
      },
      {
        source: "/blog005",
        destination: "/blog/essentials-of-photography",
        permanent: true,
      },
      {
        source: "/blog006",
        destination: "/blog/essentials-of-art-and-design",
        permanent: true,
      },
      {
        source: "/blog007",
        destination: "/blog/one-stop-learning-destination",
        permanent: true,
      },
      {
        source: "/blog008",
        destination: "/blog/online-education-for-kids",
        permanent: true,
      },
      {
        source: "/blog009",
        destination: "/blog/time-management-strategies",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
