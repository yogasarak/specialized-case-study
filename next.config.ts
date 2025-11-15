import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asgngaofemmqdyjcetkm.supabase.co",
        pathname: "/storage/v1/object/public/specialized-case-study/**",
      },
      {
        protocol: "https",
        hostname: "iwkgbbmrbksmctgieaoz.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
