module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "header-bg-color": "var(--header-bg-color)",
        "title-color": "var(--title-text-color)",
        "text-color": "var(--body-text-color)",
        "border-color": "var(--border-color)",
        "active-link-color": "var(--active-link-color)",
        "accent-color": "var(--accent-color)",
        "button-hover-bg": "var(--button-hover-bg)",
        "button-hover-border": "var(--button-hover-border)"
      }
    },
  },
  plugins: [],
}