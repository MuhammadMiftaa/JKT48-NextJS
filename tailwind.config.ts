import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily:{
        urbanist: ["Urbanist", "sans-serif"], 
        montserrat: ["Montserrat", "sans-serif"], 
        poppins: ["Poppins", "sans-serif"],
      },
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
        "tl-10rem": "10rem",
        "tr-10rem": "10rem",
      },
      boxShadow: {
        xl: "5px 5px 0px 1px",
        sm: "1px 1px 0px 1px",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require('tailwind-scrollbar'),
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".rotate-y-0": {
          transform: "rotateY(0deg)",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".-rotate-y-180": {
          transform: "rotateY(-180deg)",
        },
        ".backface-visible": {
          "backface-visibility": "visible",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
      });
    },
  ],
};

export default config;
