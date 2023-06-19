/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mb: "480px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1920px",
      },
      colors: {
        brandorange: "#FF7A01",
        brandblue: "#0071DC",
        bgheadertop: "#00284F",
        colormenu: "#2A3342",
        colorbglogin: "rgba(0, 113, 220, 0.05)",
        bglistdrawings: "#f7f8f9",
        stitle: "#4D5F7A",
        rectangle: "#D5DAE1",
        commit: "#EFF7FF",
        colorArrow: "#8896ab",
      },
      fontFamily: {
        LatoSemiBold: ["Lato SemiBlod", "sans-serif"],
        LatoMediumItalic: ["LatoMediumItalic", " sans-serif"],
        LatoExtraBold: ["LatoExtraBold", " sans-serif"],
        LatoSemiBold: ["LatoSemiBold", " sans-serif"],
        LatoMedium: ["LatoMedium", " sans-serif"],
        LatoBold: ["LatoBold", " sans-serif"],
        LatoRegular: ["LatoRegular", " sans-serif"],
      },
      boxShadow: {
        brandorange20: "4px 6px 24px rgba(255, 122, 1, 0.2)",
        brandorange30: "4px 6px 24px rgba(255, 122, 1, 0.3)",
        brandorange50: "4px 6px 24px rgba(255, 122, 1, 0.5)",
        btnsearchform: "4px 6px 24px rgba(255, 122, 1, 0.3)",
      },
      transitionDuration: {
        menuheader: "500ms",
      },
      transitionTimingFunction: {
        menuheader: "linear",
      },
      letterSpacing: {
        letter5: "0.0375rem",
      },
      width: {
        21: "5.25rem",
        25: "6.25rem",
        26: "6.5rem",
        68: "17rem",
        76: "19rem",
      },
      height: {
        21: "5.25rem",
        25: "6.25rem",
        26: "6.5rem",
        68: "17rem",
        76: "19rem",
      },
      padding: {
        19: "4.75rem",
        27: "6.75rem",
      },
    },
  },
  plugins: [],
};
