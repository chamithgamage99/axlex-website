/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the most important line!
  // It tells Next.js to build a static site in the 'out' directory.
  output: 'export',

  // This is a proactive fix. If you ever use the <Image> component
  // from 'next/image', this is required for static export to work.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;