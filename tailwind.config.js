/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {},
      backgroundColor: {
        "light-gray": "#D9D9D9",
        "dark-gray": "#909090",
        "sand-red": "#FF2125",
        "sand-blue": "#3990F9",
        "snad-skyblue": "#17F9F9",
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(135deg, #3990F9 0%, #17F9F9 100%)",
        "gradient-txt-blue":
          "linear-gradient(90deg, #3990F9 0%, #59FFE9 100%))",
        "gradient-ctx":
          "linear-gradient(180deg, rgba(255, 12, 12, 0.03) 0%, rgba(255, 12, 12, 0.30) 100%)",
        "gradient-mnx":
          "linear-gradient(180deg, r gba(57, 144, 249, 0.03) 0%, rgba(57, 144, 249, 0.30) 100%)",
        "gradient-mdx":
          "linear-gradient(180deg, rgba(79, 223, 255, 0.03) 0%, rgba(79, 223, 255, 0.30) 100%)",
      },
      backgroundClip: {
        text: "text",
      },
      textFillColor: {
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};
