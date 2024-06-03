/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: '',
  },
  basePath: '/developli',
  assetPrefix: '/developli/',
  output: 'export'
};

export default nextConfig;
