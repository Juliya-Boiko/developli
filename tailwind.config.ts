import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       primary: '#FF0000',
  //       secondary: '#00FF00',
  //     },
  //     fontFamily: {
  //       sans: ['Roboto', 'Arial', 'sans-serif'],
  //     },
  //   },
  // },
  plugins: [
    // 'tailwindcss',
    // 'postcss-flexbugs-fixes',
    // 'postcss-preset-env',
    // [
    //   'postcss-normalize',
    //   {
    //     allowDuplicates: false,
    //   },
    // ],
    // [
    //   '@fullhuman/postcss-purgecss',
    //   {
    //     content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    //     defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    //   },
    // ],
    // 'autoprefixer',
  ],
};
export default config;
