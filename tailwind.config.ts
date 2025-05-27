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
        darkBg: "#131424",
      }, 
      backgroundImage: {
        "gradient-cover":
          "linear-gradient(90.21deg, rgba(5, 10, 20, 0.95) -5.91%, rgba(15, 30, 60, 0.9) 50%, rgba(25, 55, 90, 0.85) 111.58%)",
      },      
    },
  },
  plugins: [],
};
export default config;
