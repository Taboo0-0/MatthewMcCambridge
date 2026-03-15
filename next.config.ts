import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/MatthewMcCambridge",
  assetPrefix: "/MatthewMcCambridge",
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig

export default nextConfig;
