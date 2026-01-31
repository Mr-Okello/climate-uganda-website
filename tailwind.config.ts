import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-green": "#1f7a4d",
        "brand-blue": "#2563eb",
        "brand-amber": "#f59e0b"
      }
    }
  },
  plugins: []
};

export default config;
