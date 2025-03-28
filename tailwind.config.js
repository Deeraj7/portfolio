/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#070714",
          lighter: "#0c0c1d",
          card: "#12121f",
        },
        light: {
          DEFAULT: "#f3f4f6",
          lighter: "#ffffff",
          card: "#ffffff",
        },
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        bounce: "bounce 1s ease-in-out",
        'spin-slow': 'spin 20s linear infinite',
        'reveal': 'reveal 1s ease-out forwards',
        'reveal-delayed': 'reveal 1s ease-out 0.5s forwards',
        'slide-up': 'slide-up 0.2s ease-out',
        'fade-out': 'fade-out 0.3s ease-out forwards',
      },
      keyframes: {
        reveal: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-25%)' },
        },
      },
      zIndex: {
        50: "50",
        60: "60",
        70: "70",
      },
      textShadow: {
        'glow': '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0ea5e9',
        'blue': '0 0 7px rgba(59, 130, 246, 0.5)',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "inherit",
          },
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderWidth: {
        3: "3px",
      },
      boxShadow: {
        "inner-lg": "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      },
    },
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient': {
          background: 'linear-gradient(90deg, #4ade80, #06b6d4)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'font-weight': '600',
          'transition': 'transform 0.3s ease-in-out',
        },
        '.text-gradient:hover': {
          transform: 'scale(1.05)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
