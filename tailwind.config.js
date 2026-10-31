/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        panel: "#0b0b0c",
        paper: "#f2f2ef",
        line: "rgba(255, 255, 255, 0.14)",
        fg: "#ffffff",
        mute: "#8f9399",
        signal: "#a9c4ff",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter Tight", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        label: "0.14em",
      },
    },
  },
  plugins: [],
};
