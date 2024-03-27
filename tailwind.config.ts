import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        todoVeryDarkBlue: "hsl(235, 21%, 11%)",
        todoVeryDesaturatedBlue: "hsl(235, 24%, 19%)",
        todoLightGrayishBlue: "hsl(234, 39%, 85%)",
        todoLightGrayBlueHover: "hsl(236, 33%, 92%)",
        todoDarkGrayishBlue: "hsl(234, 11%, 52%)",
        todoVeryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
        todoVeryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
};
export default config;
