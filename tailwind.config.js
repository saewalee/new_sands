/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // "c-white": "#fff",

        // white
        "sand-white": "#fafafa",
        "white-0.8": "rgba(255, 255, 255, 0.80)",
        "white-0.4": "rgba(255, 255, 255, 0.4);",

        // gray
        "issue-gray": "#A7A6A5",
        "light-gray": "#D9D9D9",
        "nav-gray": "#D3D1D0",
        "nav2-gray": "#A7A6A5",
        "dark-gray": "#909090",
        lightGR5: "#A8A8A8",

        // red
        "sand-red": "#FF2125",

        // blue
        "sand-blue": "#3990F9",
        "snad-skyblue": "#17F9F9",
      },

      backgroundColor: {
        "header-hover": "rgba(5, 10, 26, 0.8)",
        "con-hover": "#050a1a",
        "issue-card": "rgba(57, 144, 249, 0.1)",
      },

      backgroundImage: {
        "g-blue": "linear-gradient(135deg, #3990F9 0%, #17F9F9 100%)",
        "g-txt-blue": "linear-gradient(90deg, #3990F9 0%, #59FFE9 100%)",

        "g-blue-card":
          "radial-gradient(138.09% 141.42% at 0% 0%, rgba(57, 144, 249, 0.30) 0%, rgba(0, 255, 208, 0.03) 57.63%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.05)",

        "g-blue2":
          "linear-gradient(90deg, rgba(57, 144, 249, 0.20) 4.83%, rgba(57, 144, 249, 0.00) 111.99%);",
        ctxBg:
          "linear-gradient(180deg, rgba(255, 12, 12, 0.03) 0%, rgba(255, 12, 12, 0.30) 100%)",
        mnxBg:
          "linear-gradient(180deg, r gba(57, 144, 249, 0.03) 0%, rgba(57, 144, 249, 0.30) 100%)",
        mdxBg:
          "linear-gradient(180deg, rgba(79, 223, 255, 0.03) 0%, rgba(79, 223, 255, 0.30) 100%)",
      },

      textFillColor: {
        transparent: "transparent",
      },
      gap: {
        g10: "10px",
        g20: "20px",
        g24: "24px",
        g40: "40px",
        g50: "50px",
      },
      padding: {
        p24: "24px 0 24px 0",
        p30: "30px",
        p130: "130px",
        p160: "160px",
      },
      margin: {
        m5: "5px",
        m7: "7px",
        m10: "10px",
        m20: "20px",
        m24: "24px",
        m30: "30px",
        m40: "40px",
        m60: "60px",
      },
      fontSize: {
        t15: "15px",
        t16: "16px",
        t18: "18px",
        t20: "20px",
        t22: "22px",
        t24: "24px",
        t36: "36px",
        title: "40px",
        t46: "46px",
      },
      lineHeight: {
        lh26: "26.4px",
        lh30: "30px",
        lh55: "55px",
        lh65: "65px",
      },
      borderRadius: {
        br8: "8px",
        br10: "10px",
      },

      height: {
        header: "78px",
        headeropen: "218px",
        button: "40px",
        h2: "2px",
        h8: "8px",
        h35: "35px",

        h140: "140px",
        footer: "300px",
        h320: "320px",
        h335: "335px",
      },
      width: {
        button: "40px",
        con: "1380px",
        li: "140px",
        w8: "8px",
        w12: "12px",
        w35: "35px",
        w289: "289px",
        w296: "296px",
        w440: "440px",
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
