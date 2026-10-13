/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProduction ? "/vkconcept" : "",
  images: { unoptimized: true },
};

module.exports = nextConfig;
