// @ts-ignore
import type { Config } from "tailwindcss"
// @ts-ignore
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // F1 Team Colors
        "ferrari-red": "#DC143C",
        "mclaren-orange": "#FF8000",
        "mercedes-silver": "#C0C0C0",
        "redbull-blue": "#1E41FF",
        "alpine-blue": "#0090FF",
        "aston-green": "#006F62",

        // Racing Theme Colors
        "carbon-black": "#1A1A1A",
        "pit-gray": "#2D2D2D",
        "track-white": "#FFFFFF",
        "checkered-flag": "#F5F5F5",

        // shadcn/ui colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "racing-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "speed-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "racing-pulse": "racing-pulse 2s ease-in-out infinite",
        "speed-slide": "speed-slide 1.5s ease-in-out infinite",
      },
      fontFamily: {
        racing: ["Orbitron", "monospace"],
        display: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "racing-gradient": "linear-gradient(135deg, #DC143C 0%, #FF8000 50%, #1E41FF 100%)",
        "carbon-fiber": "repeating-linear-gradient(45deg, #1A1A1A, #1A1A1A 2px, #2D2D2D 2px, #2D2D2D 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config

export default config
