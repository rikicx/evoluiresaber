import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FFF9EF",
          50: "#FFFCF6",
          100: "#FFF9EF",
          200: "#FBF0DD",
        },
        sun: {
          DEFAULT: "#FFC94D",
          light: "#FFE29A",
          dark: "#F0A93B",
        },
        sky: {
          DEFAULT: "#8BC7E8",
          light: "#CDE8F6",
          dark: "#4F9FC7",
        },
        mint: {
          DEFAULT: "#8FD4B8",
          light: "#D6F0E4",
          dark: "#5FB894",
        },
        coral: {
          DEFAULT: "#FF8A6B",
          light: "#FFC7B8",
          dark: "#F26744",
        },
        grape: {
          DEFAULT: "#B49BD8",
          light: "#E3D8F3",
        },
        ink: {
          DEFAULT: "#2C3A4B",
          soft: "#4A5B70",
          muted: "#7A8798",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
        blob: "42% 58% 63% 37% / 41% 44% 56% 59%",
      },
      boxShadow: {
        soft: "0 18px 45px -20px rgba(44, 58, 75, 0.25)",
        "soft-lg": "0 30px 70px -30px rgba(44, 58, 75, 0.35)",
        pill: "0 12px 30px -12px rgba(242, 103, 68, 0.55)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(4deg)" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(14px) rotate(-3deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        "float-slow": "float-slow 7s ease-in-out infinite",
        "float-slower": "float-slower 9s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        wiggle: "wiggle 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
