import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8ea9f4",
          dark: "#6b8ae0",
          light: "#b0c4f8",
        },
        dark: {
          DEFAULT: "#112250",
          light: "#1a3a7a",
        },
        accent: {
          DEFAULT: "#f7c7db",
          light: "#fce4ed",
          dark: "#f0a8c4",
        },
        text: {
          primary: "#112250",
          secondary: "#4a5568",
          light: "#718096",
          white: "#ffffff",
        },
        bg: {
          white: "#ffffff",
          light: "#f7fafc",
          gray: "#f1f5f9",
        },
      },
      borderRadius: {
        pill: "9999px",
      },
      fontFamily: {
        sans: ["var(--font-daikon)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "Courier New", "monospace"],
      },
      spacing: {
        xs: "clamp(0.25rem, 0.2vw + 0.2rem, 0.375rem)",
        sm: "clamp(0.5rem, 0.4vw + 0.4rem, 0.75rem)",
        md: "clamp(1rem, 0.8vw + 0.8rem, 1.5rem)",
        lg: "clamp(1.5rem, 1.2vw + 1.2rem, 2.25rem)",
        xl: "clamp(2rem, 1.6vw + 1.6rem, 3rem)",
        "2xl": "clamp(3rem, 2.4vw + 2.4rem, 4.5rem)",
        "3xl": "clamp(4rem, 3.2vw + 3.2rem, 6rem)",
      },
      fontSize: {
        xs: "clamp(0.75rem, 0.6vw + 0.6rem, 0.875rem)",
        sm: "clamp(0.875rem, 0.7vw + 0.7rem, 1rem)",
        base: "clamp(1rem, 0.8vw + 0.8rem, 1.125rem)",
        lg: "clamp(1.125rem, 0.9vw + 0.9rem, 1.25rem)",
        xl: "clamp(1.25rem, 1vw + 1rem, 1.5rem)",
        "2xl": "clamp(1.5rem, 1.2vw + 1.2rem, 2rem)",
        "3xl": "clamp(1.875rem, 1.5vw + 1.5rem, 2.5rem)",
        "4xl": "clamp(2.25rem, 1.8vw + 1.8rem, 3rem)",
        "5xl": "clamp(3rem, 2.4vw + 2.4rem, 4rem)",
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};

export default config;

