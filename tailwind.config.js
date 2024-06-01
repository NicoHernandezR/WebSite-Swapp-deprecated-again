/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          white: "#FFFFFF",
          primary: "#20193F",
          secondary: "#959ADC",
          accent: "#C3F123",
          black: "#1D1D1D",
        },
      },
      fontFamily: {
        title: ["Neue Haas Grotesk"],
        helveticaNeue: ["helvetica neue"],
        helveticaNeueMedium: ["helvetica neue medium"],
        helveticaNeueBold: ["helvetica neue bold"],
        helveticaNeueLight: ["helvetica neue light"],
        helveticaNeueHeavy: ["helvetica neue heavy"],
        SFProDisplaySemiBold: ["SF Pro Display SemiBold"],
        SFProDisplay: ["SF Pro Display"],
        SFProDisplayMedium: ["SF Pro Display Medium"],
        SFProDisplayBold: ["SF Pro Display Bold"],
        SFProDisplayLightItalic: ["SF Pro Display Light Italic"],
        SFProDisplayThinItalic: ["SF Pro Display Thin Italic"],
        SFProDisplayUltraLightItalic: ["SF Pro Display Light Italic"],
        subtitle: ["Lora"],
        text: ["San Francisco Pro Display"],
      },
      backgroundImage: {
        "thirdLayer": "url('src/inicio/img/thirdBg.svg')",
      },
    },
    fontSize: {
      custom: {
        title: "12px",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
        // Puedes agregar más tamaños aquí según sea necesario
      },
    },
  },
  plugins: [],
};
