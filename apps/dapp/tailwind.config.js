/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // Tremor module
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeInB: 'fadeIn 0.3s ease-in-out',
        shine: "shine 1s",
        marquee: 'marquee 125s linear infinite',
        marquee2: 'marquee2 125s linear infinite',
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-5': 'text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-6': 'text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-7': 'text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-8': 'text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
    keyframes: {
        fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
        },
        shine: {
          "100%": { left: "125%" },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)'},
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)'},
        },
        'text-slide': {
          '0%, 16%': {
              transform: 'translateY(0%)',
          },
          '20%, 36%': {
              transform: 'translateY(-16.66%)',
          },
          '40%, 56%': {
              transform: 'translateY(-33.33%)',
          },
          '60%, 76%': {
              transform: 'translateY(-50%)',
          },
          '80%, 96%': {
              transform: 'translateY(-66.66%)',
          },
          '100%': {
              transform: 'translateY(-83.33%)',
          },
        },  
        'text-slide-2': {
          '0%, 40%': {
              transform: 'translateY(0%)',
          },
          '50%, 90%': {
              transform: 'translateY(-50%)',
          },
          '100%': {
              transform: 'translateY(0%)',
          },
      },
      'text-slide-3': {
          '0%, 26.66%': {
              transform: 'translateY(0%)',
          },
          '33.33%, 60%': {
              transform: 'translateY(-25%)',
          },
          '66.66%, 93.33%': {
              transform: 'translateY(-50%)',
          },
          '100%': {
              transform: 'translateY(-75%)',
          },
      },
      'text-slide-4': {
          '0%, 20%': {
              transform: 'translateY(0%)',
          },
          '25%, 45%': {
              transform: 'translateY(-20%)',
          },
          '50%, 70%': {
              transform: 'translateY(-40%)',
          },
          '75%, 95%': {
              transform: 'translateY(-60%)',
          },                            
          '100%': {
              transform: 'translateY(-80%)',
          },
      },
      'text-slide-5': {
          '0%, 16%': {
              transform: 'translateY(0%)',
          },
          '20%, 36%': {
              transform: 'translateY(-16.66%)',
          },
          '40%, 56%': {
              transform: 'translateY(-33.33%)',
          },
          '60%, 76%': {
              transform: 'translateY(-50%)',
          },
          '80%, 96%': {
              transform: 'translateY(-66.66%)',
          },
          '100%': {
              transform: 'translateY(-83.33%)',
          },
      },
      'text-slide-6': {
          '0%, 13.33%': {
              transform: 'translateY(0%)',
          },
          '16.66%, 30%': {
              transform: 'translateY(-14.28%)',
          },
          '33.33%, 46.66%': {
              transform: 'translateY(-28.57%)',
          },
          '50%, 63.33%': {
              transform: 'translateY(-42.85%)',
          },
          '66.66%, 80%': {
              transform: 'translateY(-57.14%)',
          },
          '83.33%, 96.66%': {
              transform: 'translateY(-71.42%)',
          },
          '100%': {
              transform: 'translateY(-85.71%)',
          },
      },
      'text-slide-7': {
          '0%, 11.43%': {
              transform: 'translateY(0%)',
          },
          '14.28%, 25.71%': {
              transform: 'translateY(-12.5%)',
          },
          '28.57%, 40%': {
              transform: 'translateY(-25%)',
          },
          '42.85%, 54.28%': {
              transform: 'translateY(-37.5%)',
          },
          '57.14%, 68.57%': {
              transform: 'translateY(-50%)',
          },
          '71.42%, 82.85%': {
              transform: 'translateY(-62.5%)',
          },
          '85.71%, 97.14%': {
              transform: 'translateY(-75%)',
          },
          '100%': {
              transform: 'translateY(-87.5%)',
          },
      },
      'text-slide-8': {
          '0%, 10%': {
              transform: 'translateY(0%)',
          },
          '12.5%, 22.5%': {
              transform: 'translateY(-11.11%)',
          },
          '25%, 35%': {
              transform: 'translateY(-22.22%)',
          },
          '37.5%, 47.5%': {
              transform: 'translateY(-33.33%)',
          },
          '50%, 60%': {
              transform: 'translateY(-44.44%)',
          },
          '62.5%, 72.5%': {
              transform: 'translateY(-55.55%)',
          },
          '75%, 85%': {
              transform: 'translateY(-66.66%)',
          },
          '87.5%, 97.5%': {
              transform: 'translateY(-77.77%)',
          },
          '100%': {
              transform: 'translateY(-88.88%)',
          },
        } 
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '97': '25.5rem',
        '98': '26.5rem',
        '99': '32rem',
      },
      boxShadow: {
        // light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card": "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown": "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      borderRadius: {
        "tremor-small": "0.375rem",
        "tremor-default": "0.5rem",
        "tremor-full": "9999px",
      },
      fontSize: {
        "tremor-label": ["0.75rem"],
        "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
        "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
        "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      colors: {
        // Extend the existing color palette or add custom colors
        primary: '#76D248',
        secondary: '#5f934b',
        custom: {
          'blue': '#0000FF',
          'yellow': '#FFFF00',
          'black': '#121212',
          'dark-purple': '#371750',
        },
        tremor: {
            brand: {
              faint: "#eff6ff", // blue-50
              muted: "#bfdbfe", // blue-200
              subtle: "#60a5fa", // blue-400
              DEFAULT: "#3b82f6", // blue-500
              emphasis: "#1d4ed8", // blue-700
              inverted: "#ffffff", // white
            },
            background: {
              muted: "#f9fafb", // gray-50
              subtle: "#f3f4f6", // gray-100
              DEFAULT: "#ffffff", // white
              emphasis: "#374151", // gray-700
            },
            border: {
              DEFAULT: "#e5e7eb", // gray-200
            },
            ring: {
              DEFAULT: "#e5e7eb", // gray-200
            },
            content: {
              subtle: "#9ca3af", // gray-400
              DEFAULT: "#6b7280", // gray-500
              emphasis: "#374151", // gray-700
              strong: "#111827", // gray-900
              inverted: "#ffffff", // white
            },
        },
        "dark-tremor": {
            brand: {
              faint: "#0B1229", // custom
              muted: "#172554", // blue-950
              subtle: "#1e40af", // blue-800
              DEFAULT: "#3b82f6", // blue-500
              emphasis: "#60a5fa", // blue-400
              inverted: "#030712", // gray-950
            },
            background: {
              muted: "#131A2B", // custom
              subtle: "#1f2937", // gray-800
              DEFAULT: "#111827", // gray-900
              emphasis: "#d1d5db", // gray-300
            },
            border: {
              DEFAULT: "#1f2937", // gray-800
            },
            ring: {
              DEFAULT: "#1f2937", // gray-800
            },
            content: {
              subtle: "#4b5563", // gray-600
              DEFAULT: "#6b7280", // gray-500
              emphasis: "#e5e7eb", // gray-200
              strong: "#f9fafb", // gray-50
              inverted: "#000000", // black
            },
          },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#576fc6",
        
"secondary": "#d1e589",
        
"accent": "#4ff916",
        
"neutral": "#372839",
        
"base-100": "#393947",
        
"info": "#90c7ee",
        
"success": "#19cc5e",
        
"warning": "#efbd71",
        
"error": "#e31c41",
        },
      },
    ],
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ["hover", "ui-selected"],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [require("daisyui")],
  darkMode: 'class',
};