import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // The repo has lockfiles at both the repo root and the frontend/ folder,
  // which made Next.js infer the wrong workspace root. Pin it to this folder.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
