import { title } from "process";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: colors.gray[900],
        active: colors.blue[700],
        info: {
          DEFAULT: colors.blue[400],
          text: colors.blue[700],
          background: colors.blue[100],
          border: colors.blue[500],
        },
        error: {
          DEFAULT: colors.red[400],
          text: colors.red[700],
          background: colors.red[100],
          border: colors.red[500],
        },
        success: {
          DEFAULT: colors.green[400],
          text: colors.green[700],
          background: colors.green[100],
          border: colors.green[500],
        },
        warning: {
          DEFAULT: colors.yellow[300],
          text: colors.yellow[700],
          background: colors.yellow[100],
          border: colors.yellow[500],
        },
      },
      textColor: {
        primary: colors.neutral[200],
        secondary: colors.cyan[400],
        tertiary: colors.yellow[400],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        title: ["Exo", "sans-serif"],
        body: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
