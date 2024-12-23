import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlack: "#0D0D0D",
        lightBlack: "#1A1A1A",
        lightBlue: "#1E6F9F",
        purple: "#5E60CE",
        darkGray: "#333333",
        darkerGray: "#262626",
        lightGray: "#808080",
        white: "#D9D9D9",
      },
    },
  },
  plugins: [],
} satisfies Config;
