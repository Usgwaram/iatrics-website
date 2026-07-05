import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#06345f",
          blue: "#0b5ea8",
          teal: "#12a7a5",
          cyan: "#47cdd4",
          ice: "#f3fbff",
          ink: "#102337",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(6, 52, 95, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
