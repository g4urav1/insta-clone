/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--fm-bg)",
        surface: "var(--fm-surface)",

        primary: "var(--fm-primary)",
        secondary: "var(--fm-secondary)",
        accent: "var(--fm-accent)",
        lime: "var(--fm-lime)",

        text: "var(--fm-text)",
        muted: "var(--fm-muted)",
        hovertext: "var(--fm-hover-text)",
        hoverbg: "var(--fm-hover)",
      },
      backgroundImage: {
        "fm-gradient": "var(--fm-gradient)",
      },
    },
  },
  plugins: [],
}

