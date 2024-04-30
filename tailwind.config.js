/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { 
    extend: {
      colors: {
        custom: {
          white: '#FFFFFF',
          primary: '#20193F',
          secondary: '#959ADC',
          accent: '#C3F123',
          black: '#1D1D1D',
        },
      },
      fontFamily: {
        title: ['Neue Haas Grotesk'],
        helveticaNeue: ["helvetica neue"],
        helveticaNeueBold: ["helvetica neue bold"],
        SFProDisplaySemiBold: ['SF Pro Display SemiBold'],
        SFProDisplay: ['SF Pro Display'],
        SFProDisplayBold: ['SF Pro Display Bold'],
        subtitle: ['Lora'],
        text: ['San Francisco Pro Display'],
        },
      },
      fontSize: {
        custom: {
          'title': '12px',
          'sm': '0.875rem',
          'base': '1rem',
          'lg': '1.125rem',
          'xl': '1.25rem',
          '2xl': '1.5rem',
          '3xl': '1.875rem',
          '4xl': '2.25rem',
          '5xl': '3rem',
          '6xl': '4rem',
          '7xl': '5rem',
          // Puedes agregar más tamaños aquí según sea necesario
        },
      },
    },
  plugins: [],
}
