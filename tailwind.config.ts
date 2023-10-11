import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        chatgpt: {
          input: "#40414F",
          darkGray: "#202123",
          midGray: "#4D4D4F",
          gray: "#343541",
          textBg: "#565869",
        },
      },
      keyframes: {
        hideSidebar: {
          "0%": { transform: "translateX(0rem)" },
          "100%": { transform: "translateX(-20rem)" },
        },
        showSidebar: {
          "0%": { transform: "translateX(-20rem)" },
          "100%": { transform: "translateX(0rem)" },
        },
      },
      animation: {
        hideSidebar: "hideSidebar 1s ease-in-out forwards",
        showSidebar: "showSidebar 1s ease-in-out forwards",
      },
      boxShadow: {
        hideUp: "0px -20px 10px 0px #202123"
      }
    },
  },
  plugins: [],
};
export default config;
