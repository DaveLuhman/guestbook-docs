/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "mdx"],
  output: "export",
  trailingSlash: false,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
