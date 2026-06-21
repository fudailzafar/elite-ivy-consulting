/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#E7DCC8",
        ink: "#0E3331",
        accent: "#C1572C",
        "accent-dark": "#A03E18",
        brass: "#A8823C",
        "brass-border": "rgba(168, 130, 60, 0.3)",
        body: "#18181C",
        parchment: "#FAF7F0",
      },
      fontFamily: {
        display: ["var(--font-bricolage)", "sans-serif"],
        body: ["var(--font-geist)", "sans-serif"],
      },
      fontSize: {
        hero: "68px",
        h2: "52px",
        h3: "24px",
        kicker: "12px",
      },
      spacing: {
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        6: "48px",
        8: "64px",
        12: "96px",
        16: "128px",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        base: "450ms",
      },
      keyframes: {
        clipPathWipe: {
          from: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
          to: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        },
        marqueeScroll: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-100%, 0, 0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "mask-reveal": "clipPathWipe 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "marquee-scroll": "marqueeScroll 45s linear infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
