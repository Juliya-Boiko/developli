/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  // reactStrictMode: true,
  images: { unoptimized: true },
  sassOptions: {
    prependData: `
      @import "${join(__dirname, 'styles', '_variables.scss')}";
      @import "${join(__dirname, 'styles', '_typografy.scss')}";
      @import "${join(__dirname, 'styles', '_mixins.scss')}";
      @import "${join(__dirname, 'styles', '_placeholders.scss')}";
      @import "${join(__dirname, 'styles', '_buttons.scss')}";
      @import "${join(__dirname, 'styles', '_common.scss')}";
      `,
    includePaths: [join(__dirname, 'styles')],
  },
  basePath: '/developli',
  assetPrefix: '/',
  output: 'export',
  pageExtensions: ['jsx', 'js', 'tsx', 'ts'],
};

export default nextConfig;
