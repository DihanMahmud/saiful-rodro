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
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-2": "rgb(var(--color-surface-2) / <alpha-value>)",
        card: "rgb(var(--color-card) / <alpha-value>)",
        "card-hover": "rgb(var(--color-card-hover) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
          muted: "rgb(var(--color-ink-muted) / <alpha-value>)",
          subtle: "rgb(var(--color-ink-subtle) / <alpha-value>)",
        },
        border: {
          DEFAULT: "rgb(var(--color-border) / <alpha-value>)",
          strong: "rgb(var(--color-border-strong) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "rgb(var(--color-brand) / <alpha-value>)",
          hover: "rgb(var(--color-brand-hover) / <alpha-value>)",
          soft: "rgb(var(--color-brand-soft) / <alpha-value>)",
          fg: "rgb(var(--color-brand-fg) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
        },
        success: "rgb(var(--color-success) / <alpha-value>)",
        danger: "rgb(var(--color-danger) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Display
        "display-xl": ["clamp(2.25rem, 5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-lg": ["clamp(2.75rem, 5.5vw, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "700" }],
        "display-md": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-sm": ["clamp(1.5rem, 2.5vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "600" }],
        // Eyebrow
        eyebrow: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.12em", fontWeight: "600" }],
        // Body
        "body-lg": ["1.125rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body": ["1rem", { lineHeight: "1.65", fontWeight: "400" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55", fontWeight: "400" }],
      },
      spacing: {
        section: "clamp(5rem, 10vw, 8rem)",
        "section-sm": "clamp(3.5rem, 6vw, 5rem)",
      },
      maxWidth: {
        prose: "68ch",
        "7xl": "80rem",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
      },
      boxShadow: {
        soft: "0 1px 2px 0 rgb(0 0 0 / 0.04), 0 2px 8px -2px rgb(0 0 0 / 0.08)",
        elevated: "0 4px 6px -1px rgb(0 0 0 / 0.06), 0 12px 24px -6px rgb(0 0 0 / 0.12)",
        glow: "0 0 0 1px rgb(var(--color-brand) / 0.2), 0 8px 24px -8px rgb(var(--color-brand) / 0.25)",
        "glow-soft": "0 0 0 1px rgb(var(--color-brand) / 0.08), 0 4px 16px -4px rgb(var(--color-brand) / 0.12)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        elegant: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float-soft": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-cta": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgb(var(--color-brand) / 0.4)" },
          "50%": { boxShadow: "0 0 0 8px rgb(var(--color-brand) / 0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "draw-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 400ms ease-out both",
        "float-soft": "float-soft 6s ease-in-out infinite",
        "pulse-cta": "pulse-cta 2.5s ease-out infinite",
        marquee: "marquee 40s linear infinite",
        "draw-line": "draw-line 1.2s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(circle at 30% 30%, rgb(var(--color-brand) / 0.08), transparent 60%)",
        "section-glow":
          "radial-gradient(circle at 50% 0%, rgb(var(--color-brand) / 0.06), transparent 50%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
