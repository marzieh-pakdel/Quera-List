/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#2C7EF8",
        "primary-hover-light": "#075CD9",
        "on-primary-light": "#FFFFFF",
        "background-light": "#EBEDEF",
        "on-background-light": "#191C1E",
        "surface-light": "#EBEDEF",
        errors: "#E63946",
        success: "#90F677",
        "neutral-1": "#000000",
        "neutral-2": "#323233",
        "neutral-3": "#646466",
        "neutral-4": "#7D7D7F",
        "neutral-5": "#AFAEB2",
        "neutral-6": "#C8C7CB",
        "neutral-7": "#E1E0E5",
        "neutral-8": "#E1E0E5",
        "neutral-9": "#F5F6F8",
        "neutral-10": "#FEFEFE",
        "neutral-11": "#FFFFFF",
        border: "#E3E6E8",
        "dark-gray": "#666666",
        "light-text": "#444749",
        comment: "#5C5C5C",
        "dark-text": "#242424",
        "input-border": "#A1A1A1",
        placeholder: "#BCBCBC",
        "main-background": "#EBF3FF",

        "primary-dark": "#3A86F8",
        "primary-hover-dark": "#6BA4FA",
        "background-dark": "#040810",
        "on-background-dark": "#E6E9EF",
        "surface-dark": "#E6E9EF",
        "main-dark": "#060C18",
        "nav-dark": "#CFCFCF",
        "card-bg-dark": "#0B192D",
        "light-text-dark": "#E6E6E6",
      },

      backgroundImage: {
        "circle-1":
          "linear-gradient(160.99deg, rgba(239, 235, 255, 0) 29.95%, #E0EDFF 78.88% )",
        "circle-2":
          "linear-gradient(162.19deg, rgba(239, 235, 255, 0) 32.45%, #EBEBFB 79.35%)",
        "top-bg-dark" :
          "linear-gradient(180deg, rgba(2, 103, 255, 0.25) -25.32%, rgba(26, 32, 44, 0) 88.96%)",
      },

      screens: {
        lg: "400px",
      },

      fontFamily: {
        "Yekan-bakh": "YekanBakh",
      },

      fontWeight: {
        medium: "900",
        extrrabold: "800",
        bold: "700",
        semibold: "600",
        regular: "400",
        light: "300",
      },

      fontSize: {
        10: "0.625rem",
        11: "0.688rem",
        12: "0.75rem",
        13: "0.813rem",
        14: "0.875rem",
        15: "0.938rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
        36: "2.25rem",
        40: "2.5rem",
        42: "2.625rem",
        46: "2.875rem",
        64: "4rem",
      },
    },
  },
};
