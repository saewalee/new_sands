/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#D9D9D9",
        "nav-gray": "#D3D1D0",
        "nav2-gray": "#A7A6A5",
        "dark-gray": "#909090",
        "sand-white": "#fafafa",
        "sand-red": "#FF2125",
        "sand-blue": "#3990F9",
        "snad-skyblue": "#17F9F9",
        "white-0.8": "rgba(255, 255, 255, 0.80)",
      },

      backgroundColor: {
        "light-gray": "#D9D9D9",
        "dark-gray": "#909090",
        "sand-red": "#FF2125",
        "sand-blue": "#3990F9",
        "snad-skyblue": "#17F9F9",
        "header-hover": "rgba(5, 10, 26, 0.8)",
        "con-hover": "#050a1a",
        // "grd-blue": "linear-gradient(135deg, #3990F9 0%, #17F9F9 100%)",
        // "grd-blue-card":
        //   "radial-gradient(138.09% 141.42% at 0% 0%, rgba(57, 144, 249, 0.30) 0%, rgba(0, 255, 208, 0.03) 57.63%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.05);",

        // "grd-blue2":
        //   "linear-gradient(90deg, rgba(57, 144, 249, 0.20) 4.83%, rgba(57, 144, 249, 0.00) 111.99%);",
        // "grd-ctx":
        //   "linear-gradient(180deg, rgba(255, 12, 12, 0.03) 0%, rgba(255, 12, 12, 0.30) 100%)",
        // "grd-mnx":
        //   "linear-gradient(180deg, r gba(57, 144, 249, 0.03) 0%, rgba(57, 144, 249, 0.30) 100%)",
        // "grd-mdx":
        //   "linear-gradient(180deg, rgba(79, 223, 255, 0.03) 0%, rgba(79, 223, 255, 0.30) 100%)",
      },

      backgroundImage: {
        "g-blue": "linear-gradient(135deg, #3990F9 0%, #17F9F9 100%)",
        "g-txt-blue": "linear-gradient(90deg, #3990F9 0%, #59FFE9 100%)",

        "g-blue-card":
          "radial-gradient(138.09% 141.42% at 0% 0%, rgba(57, 144, 249, 0.30) 0%, rgba(0, 255, 208, 0.03) 57.63%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.05)",

        "g-blue2":
          "linear-gradient(90deg, rgba(57, 144, 249, 0.20) 4.83%, rgba(57, 144, 249, 0.00) 111.99%);",
        "g-ctx":
          "linear-gradient(180deg, rgba(255, 12, 12, 0.03) 0%, rgba(255, 12, 12, 0.30) 100%)",
        "g-mnx":
          "linear-gradient(180deg, r gba(57, 144, 249, 0.03) 0%, rgba(57, 144, 249, 0.30) 100%)",
        "g-mdx":
          "linear-gradient(180deg, rgba(79, 223, 255, 0.03) 0%, rgba(79, 223, 255, 0.30) 100%)",
      },

      textFillColor: {
        transparent: "transparent",
      },
      gap: {
        g10: "10px",
        g40: "40px",
        g50: "50px",
      },
      padding: {
        p160: "160px",
        p24: "24px 0 24px 0",
      },
      margin: {
        m10: "10px",
        m20: "20px",
        m24: "24px",
        m40: "40px",
        m60: "60px",
      },
      fontSize: {
        t18: "18px",
        t20: "20px",
        t24: "24px",
        title: "40px",
        t46: "46px",
      },
      lineHeight: {
        lh30: "30px",
        lh55: "55px",
        lh65: "65px",
      },
      borderRadius: {
        br8: "8px",
      },

      height: {
        header: "78px",
        headeropen: "218px",
        h140: "140px",
        h335: "335px",
      },
      width: {
        con: "1380px",
        li: "120px",
        w296: "296px",
      },
      fontFamily: {
        g: "GmarketSans",
      },
      transitionProperty: {
        height: "height",
        bg: "background",
        opacity: "opacity",
      },
    },
  },
  plugins: [],
};
