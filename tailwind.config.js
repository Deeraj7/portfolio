/** @type {import('tailwindcss').Config} */
export default {
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
        slideUp: "slide-up 0.8s ease-out forwards",
        fadeIn: "fadeIn 0.8s ease-out forwards",
        bounce: "bounce 1s infinite",
        spin: "spin 1s linear infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        slideUp: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(to right, #00fff220 1px, transparent 1px), linear-gradient(to bottom, #00fff220 1px, transparent 1px)",
      },
      scale: {
        102: "1.02",
      },
      transitionDuration: {
        400: "400ms",
      },
      backdropBlur: {
        xs: "2px",
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
      zIndex: {
        60: "60",
        70: "70",
      },
      textShadow: {
        'glow': '0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0ea5e9',
        'blue': '0 0 7px rgba(59, 130, 246, 0.5)',
      },
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
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};
