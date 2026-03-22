import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'media',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        royal: {
          DEFAULT: '#4C40F7',
          light: '#6B61FF',
          dark: '#3A30C5',
        },
        // Neutral colors
        neutral: {
          white: '#FFFFFF',
          'light-gray': '#F5F6F8',
          'cool-gray': '#E8EAEF',
          'medium-gray': '#64748B',
          charcoal: '#2D3142',
          'navy-dark': '#1A1D2E',
        },
        // Accent colors
        accent: {
          'soft-purple': '#E8E6FF',
          'soft-peach': '#FFE8D6',
          'soft-yellow': '#FFF9E6',
          'soft-green': '#E6F9F5',
          coral: '#FF6B6B',
          orange: '#FF9054',
        },
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-crimson-pro)', 'serif'],
      },
      fontSize: {
        'hero-h1': 'clamp(2.75rem, 6vw, 4.5rem)',
        'h2': 'clamp(1.75rem, 4vw, 2.5rem)',
        'h3': '1.5rem',
        'h4': '1.125rem',
      },
      spacing: {
        'section-y': 'clamp(60px, 8vw, 100px)',
        'section-x': 'clamp(24px, 5vw, 80px)',
      },
      maxWidth: {
        'container': '1280px',
      },
      borderRadius: {
        'card': '1.25rem',
        'button': '0.5rem',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.04), 0 4px 16px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'elevated': '0 4px 16px rgba(0, 0, 0, 0.08), 0 12px 32px rgba(0, 0, 0, 0.1)',
        'button': '0 4px 12px rgba(76, 64, 247, 0.3)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
