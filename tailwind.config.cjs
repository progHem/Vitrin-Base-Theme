/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js}",
    "./*.jinja",
    "./templates/**/*.jinja",
    "./sections/**/*.jinja",
    "./components/**/*.jinja",
    "./assets/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "10px",
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        "primary-text": "var(--text-color-primary-bg)",
        "header-primary": "var(--header-primary-color, var(--primary-color))",
        "header-text":
          "var(--header-text-color-primary-bg, var(--text-color-primary-bg))",
        "footer-primary": "var(--footer-primary-color)",
        "footer-text": "var(--footer-text-color-primary-bg)",
        secondary: "var(--secondary-color)",
        warning: "var(--warning-color)",
        danger: "var(--danger-color)",
        success: "var(--sucess-color)",
      },
      fontFamily: {
        sans: ["var(--font-family)", "Changa", "sans-serif"],
      },
      screens: {
        "2xl": "1280px",
        mdd: { max: "768px" },
      },
      fontSize: {
        xxs: "11px",
        xxxs: "8px",
        md: "15px",
      },
      keyframes: {
        "infinite-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "text-scroll": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "opacity-shimmer": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "infinite-scroll": "infinite-scroll 12s linear infinite",
        "text-scroll": "text-scroll 14s linear infinite",
        "opacity-shimmer": "opacity-shimmer 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
