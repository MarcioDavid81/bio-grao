import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#85AC1C",
        secondary: "#2B3089"
      },
      fontFamily: {
        Exo: ["Exo", "sans-serif"],
		Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;