import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    BACKEND_API: 'http://localhost:8080/',
  },
};

export default nextConfig;
