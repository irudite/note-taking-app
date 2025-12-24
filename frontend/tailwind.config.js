module.exports = {
  content: [
    "./renderer/pages/**/*.{js,jsx,ts,tsx}",
    "./renderer/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        sidebar: "var(--color-sidebar)",
        editor: "var(--color-editor)",
        accent: "var(--color-accent)",
        text: "var(--color-text)",
        muted: "var(--color-text-muted)",
        border: "var(--color-border)"
      }
    }
  },
  plugins: []
}

