/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          light: "#fef3c7",
          dark: "#92400e",
        },
        warm: {
          50: "rgb(var(--warm-50) / <alpha-value>)",
          100: "rgb(var(--warm-100) / <alpha-value>)",
          200: "rgb(var(--warm-200) / <alpha-value>)",
          300: "rgb(var(--warm-300) / <alpha-value>)",
          400: "rgb(var(--warm-400) / <alpha-value>)",
          500: "rgb(var(--warm-500) / <alpha-value>)",
          600: "rgb(var(--warm-600) / <alpha-value>)",
          700: "rgb(var(--warm-700) / <alpha-value>)",
          800: "rgb(var(--warm-800) / <alpha-value>)",
          900: "rgb(var(--warm-900) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
