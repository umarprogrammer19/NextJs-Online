import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primRed: "#DB4444",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "480px"
      }
    },
  },
  plugins: [],
};
export default config;
