/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // BASIC COLOR
        transparent: "transparent",
        black: "#000000",
        white: "#ffffff",
        light: "#F0FEFF",

        // white
        "white-0.4": "rgba(255, 255, 255, 0.4);",
        "white-0.8": "rgba(255, 255, 255, 0.80)",

        // gray
        "light-gray": "#D9D9D9",
        "light-gray02": "#fafafa",
        "light-gray03": "#A7A6A5",
        "light-gray04": "#A8A8A8",
        "light-gray05": "#D3D1D0",
        "light-gray06": "#A7A6A5",
        "light-gray06": "rgba(204, 204, 204, 0.80)",

        "dark-gray": "#909090",
        "dark-gray02": "#333",
        "dark-gray03": "#575757",
        "dark-gray04": "#505050",

        // red
        red01: "#FF2125",
        red02: "#FF0C0C",

        // blue
        blue01: "#3990F9",

        "light-blue01": "#17F9F9",
        "light-blue02": "#4FDFFF",
        "light-blue03": "#00CAEA",
      },

      backgroundColor: {
        headerBg: "rgba(5, 10, 26, 0.8)",
        "con-hover": "#050a1a",
        "issue-card": "rgba(57, 144, 249, 0.1)",
        belt: "#0F2547",
      },

      backgroundImage: {
        "g-blue": "linear-gradient(135deg, #3990F9 0%, #17F9F9 100%)",
        "g-txt-blue": "linear-gradient(90deg, #3990F9 0%, #59FFE9 100%)",
        "g-txt-blue02": "linear-gradient(90deg, #49F 0%, #59FFE9 100%)",
        "g-blue-card":
          "radial-gradient(138.09% 141.42% at 0% 0%, rgba(57, 144, 249, 0.30) 0%, rgba(0, 255, 208, 0.03) 57.63%, rgba(255, 255, 255, 0.00) 100%), rgba(255, 255, 255, 0.05)",

        "g-blue2":
          "linear-gradient(90deg, rgba(57, 144, 249, 0.20) 4.83%, rgba(57, 144, 249, 0.00) 111.99%);",

        "g-blue3":
          "linear-gradient(90deg, rgba(57, 144, 249, 0.60) 0%, rgba(89, 255, 233, 0.60) 100%)",
        "g-blue4":
          "linear-gradient(90deg, rgba(68, 153, 255, 0.25) 0%, rgba(89, 255, 233, 0.25) 100%)",
        "feature-bg":
          "linear-gradient(270deg, rgba(68, 153, 255, 0.50) -1.7%, rgba(68, 153, 255, 0.00) 105.46%)",
        "feature-bg-reverse":
          "linear-gradient(90deg, rgba(68, 153, 255, 0.50) -1.7%, rgba(68, 153, 255, 0.00) 105.46%)",

        ctxBg:
          "linear-gradient(180deg, rgba(255, 12, 12, 0.03) 0%, rgba(255, 12, 12, 0.30) 100%)",
        mnxBg:
          "linear-gradient(180deg, rgba(57, 144, 249, 0.03) 0%, rgba(57, 144, 249, 0.30) 100%)",
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
        g60: "60px",
        g80: "80px",
      },
      padding: {
        p10: "10px",
        p24: "24px 0 24px 0",
        p30: "30px",
        p40: "40px",
        p60: "60px",
        p80: "80px",
        p100: "100px",
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
        m100: "100px",
        m450: "450px",
      },
      fontSize: {
        t14: "14px",
        t15: "15px",
        t16: ["16px", "24px"],
        t18: "18px",
        t20: ["20px", "30px"],
        t22: ["22px", "26.4px"],
        t24: "24px",
        t28: "28px",
        t32: "32px",
        t36: "36px",
        title: "40px",
        t42: ["42px", "55px"],
        t46: ["46px", "55px"],
        t50: ["50px", "65px"],
        t60: "60px",
        t100: "100px",
      },

      borderRadius: {
        br4: "4px",
        br8: "8px",
        br10: "10px",
      },

      height: {
        header: "78px",
        headeropen: "218px",
        button: "40px",
        h1: "1px",
        h2: "2px",
        h3: "3px",
        h8: "8px",
        h35: "35px",
        h45: "45px",
        h50: "50px",
        h60: "60px",
        h140: "140px",
        footer: "300px",
        h320: "320px",
        h335: "335px",
        h740: "740px",
        h750: "750px",
        h760: "760px",
        h80per: "80%",
        h85per: "85%",
      },
      width: {
        button: "40px",
        con: "1380px",
        li: "140px",
        w1: "1px",
        w8: "8px",
        w12: "12px",
        w35: "35px",
        w45: "45px",
        w98: "98px",
        w180: "180px",
        w289: "289px",
        w296: "296px",
        w440: "440px",
        w730: "730px",
        w15per: "15%",
        w85per: "85%",
      },
      fontFamily: {
        g: "GmarketSans",
        e: "EsaManru",
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
