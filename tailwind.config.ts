import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme"; // <-- THIS IS THE FIX

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This tells Tailwind to use 'Share Tech' when you use 'font-sans'
        sans: ["var(--font-share-tech)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;