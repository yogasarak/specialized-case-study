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
    ],
  },
};

export default nextConfig;
