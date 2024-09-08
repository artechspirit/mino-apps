import type { Config } from "tailwindcss";
import daisyui from "daisyui";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        minoPrimer: "#364F6B",
        minoSekunder: "#3FC1C9",
        minoTersier: "#FC5185",
        minoBackPrimer: "#FFFFFF",
        minoBackSekunder: "#F8F8F8",
        minoBackTersier: "#727272",
        minoAccentPrimer: "#181616",
        minoAccentSekunder: "#333333",
        minoAcdentTersier: "#727272",
        minoTextPrimer: "#181616",
        minoTextSekunder: "#333333",
        minoTextTersier: "#898989",
        minoDashboardPrimer: "#182535",
        minoDashboardUngu: "#7367f0",
        minoDashboardHover: "#303b4a00",
        minoDashbiardBackGround: "#f7f7f7",
        minoDashboardRed: "#ff7879"
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"]
      },
      maxWidth: {
        "1/2": "49.2%",
        "1/3": "32%",
        "1/4": "24.2%",
        "1/5": "20%",
      }
    },
  },
  plugins: [daisyui],
};

export default config;
