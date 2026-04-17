import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07080b",
          900: "#0b0d12",
          800: "#11141b",
          700: "#181c26",
          600: "#242a38",
          500: "#3a4253",
        },
        amber: {
          glow: "#ffb020",
          hot: "#ff8a1c",
          dim: "#9c5a10",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        display: ["var(--font-space)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(255,176,32,0.45)",
        "glow-sm": "0 0 18px -4px rgba(255,176,32,0.35)",
        ring: "0 0 0 1px rgba(255,176,32,0.25), 0 8px 40px -12px rgba(255,138,28,0.35)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(255,176,32,0.10), transparent 55%), radial-gradient(ellipse at bottom, rgba(255,138,28,0.06), transparent 60%)",
        "amber-gradient":
          "linear-gradient(135deg, #ffb020 0%, #ff8a1c 45%, #ff5f13 100%)",
      },
      animation: {
        "float-slow": "float 14s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3.2s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-18px) translateX(12px)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.45" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
