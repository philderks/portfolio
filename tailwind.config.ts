import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#84f1e8",
        green: "#2bf085",
        yellow: "#f7ce0f",
        red: "#f8080b",
        bg: "#0a0a0a",
        "bg-2": "#0f0f0f",
        "bg-3": "#161616",
        border: "#1e1e1e",
        fg: "#f0f0f0",
        muted: "#383838",
        dim: "#555555",
      },
      borderRadius: {
        DEFAULT: "0",
        none: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "0",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Syne", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
