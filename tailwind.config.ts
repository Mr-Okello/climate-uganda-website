import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-green": "#1b7f3a",
        "brand-dark": "#0c2e1a",
        "brand-light": "#e7f5ed",
        "brand-sand": "#f5f1e8"
      }
    }
  },
  plugins: []
};

export default config;
