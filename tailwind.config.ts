import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-green": "#88FCAF",
      },
      textShadow: {
        "custom-hover": "2px 2px 4px #88CFAF",
      },
      borderRadius: {
        'tl-10rem': '10rem',
        'tr-10rem': '10rem', 
      },
    },
  },
  plugins: [],
};
export default config;
