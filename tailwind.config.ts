import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505', 
        surface: '#111111',    
        primary: '#3b82f6',    
        accent: '#8b5cf6',     
      },
    },
  },
  plugins: [],
};
export default config;