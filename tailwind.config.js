/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }
      'lgMin': {'min': '1023px'},
      // => @media (min-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'smMin': {'min': '639px'},
      // => @media (min-width: 639px) { ... }
    },
    
    colors: {

      // ctr K + ctr G genera paleta de colores para tailwind
      // Color Rojo Primario
      'primary': { 
          50: "#f5d5db",
          100: "#f5d5db",
          200: "#ebabb7",
          300: "#e08192",
          400: "#d6576e",
          500: "#cc2d4a",
          600: "#a3243b",
          700: "#7a1b2c",
          800: "#52121e",
          900: "#29090f"
        },

      // Colores a utilizar por el Figma
      'version1': '#CC2D4A',
      'version2': '#8FA206',
      'version3': '#61AEC9',
      'sun': '#FCD34D',
      
      // Colores del modo escuro
      'darkModeColorHover': '#374151',
      'darkModeColor': '#1F2937',


    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
     },

     fontSize: {
      'h1Size': '3rem',
      'h2Size': '2.25rem',
      'h3Size': '1.2rem',
    },

    //  Sombras a mi estilo
     boxShadow: {
      'simpleSh': '1px 1px 12px rgba(0, 0, 0, 0.3)',
      'simpleSh+': '1px 1px 12px rgba(0, 0, 0, 0.5)',
      'simpleSh++': '1px 1px 12px rgba(0, 0, 0, 0.7)',
      'simpleSh+++': '1px 1px 12px rgba(0, 0, 0, 0.9)',
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}