import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Neurai design tokens
        'aracne-bg': '#FAFAFA',
        'aracne-dark': '#141414',
        'aracne-surface': '#F1F1F1',
        'aracne-text': '#141414',
        'aracne-body': '#4A4A4A',
        'aracne-card': '#F1F1F1',
        'aracne-muted': '#9CA2A8',
        'aracne-border': '#E8E8E8',
        'aracne-purple': '#6832C5',
        'aracne-purple-light': '#F3EEFF',
        // Legacy alias so blog/inner pages keep working
        'aracne-emerald': '#6832C5',
        'aracne-cyan': '#6832C5',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
      },
      fontFamily: {
        sans: ['var(--font-questrial)', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        card: '0 2px 12px 0 rgba(0,0,0,0.06)',
        'card-hover': '0 8px 32px -4px rgba(0,0,0,0.10)',
        nav: '0 1px 0 0 rgba(0,0,0,0.06)',
        purple: '0 8px 32px -4px rgba(104,50,197,0.25)',
      },
    },
  },
  plugins: [],
}

export default config
