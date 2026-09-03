import type { Config } from 'tailwindcss';

/**
 * Concept Engineering LLC — design tokens.
 *
 * Every colour, size, radius, shadow and duration used anywhere on the site is
 * declared here. Components must not introduce values outside this system.
 *
 * Contrast note: `bronze-400` is the accent for DARK grounds only (2.24:1 on
 * paper — it fails there). `bronze-700` is the accent for LIGHT grounds.
 * `line` is decorative hairline only; anything that carries meaning (input
 * borders, button outlines) uses `line-strong`, which passes 3:1.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0C1620', // deep water — footer, deepest ground
          900: '#12212E', // wet slate — dark band base; body text on light
          800: '#1B2F40', // slate, second tone — placeholder two-tone field
          700: '#2A4359', // decorative hairline on dark
        },
        paper: '#F5F7F8',    // drafting vellum (cool) — page ground
        mist: '#E7ECEF',     // overcast — alternating band
        graphite: '#4E5C68', // pencil — muted text
        line: {
          DEFAULT: '#C6CFD5', // decorative hairline on light
          dark: '#2A4359',    // decorative hairline on dark
        },
        'line-strong': {
          DEFAULT: '#7E8B96', // functional border on light  (3.25:1 on paper)
          dark: '#66889F',    // functional border on dark   (4.36:1 on ink-900)
        },
        bronze: {
          400: '#C89257', // accent ON DARK  (6.01:1 on ink-900)
          700: '#8C5A1E', // accent ON LIGHT (5.43:1 on paper)
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Arial Narrow', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // [size, { lineHeight, letterSpacing }]
        small: ['0.875rem', { lineHeight: '1.5' }],
        base: ['1rem', { lineHeight: '1.65' }],
        lead: ['clamp(1.0625rem, 1.4vw, 1.25rem)', { lineHeight: '1.6' }],
        eyebrow: ['0.875rem', { lineHeight: '1.2', letterSpacing: '0.14em' }],
        title: ['1.125rem', { lineHeight: '1.25', letterSpacing: '-0.005em' }],
        h3: ['clamp(1.375rem, 2.2vw, 1.75rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h2: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        display: ['clamp(2.75rem, 6.5vw, 5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
      },
      maxWidth: {
        shell: '1280px', // 12-col shell
        measure: '62ch', // body measure, under the 68ch cap
      },
      spacing: {
        gutter: '24px',
        'pad-mobile': '20px',
        'section-mobile': '96px',
        section: '128px',
      },
      borderRadius: {
        control: '2px', // inputs, buttons
        card: '4px',    // cards
        // images stay at 0 — no token needed
      },
      boxShadow: {
        // the single elevation token
        elevation: '0 1px 2px rgba(12, 22, 32, 0.04), 0 8px 24px -12px rgba(12, 22, 32, 0.18)',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0, 0, 0.2, 1)', // ease-out
      },
      backgroundImage: {
        // Blueprint grid — 1px lines at 32px. Used on AT MOST two dark sections
        // (the home hero and the approach band) plus the image placeholders.
        blueprint:
          'linear-gradient(to right, rgba(245,247,248,0.04) 1px, transparent 1px),' +
          'linear-gradient(to bottom, rgba(245,247,248,0.04) 1px, transparent 1px)',
        // Ink lines on a light ground — the drafting motif on light sections.
        'blueprint-light':
          'linear-gradient(to right, rgba(18,33,46,0.05) 1px, transparent 1px),' +
          'linear-gradient(to bottom, rgba(18,33,46,0.05) 1px, transparent 1px)',
        'blueprint-strong':
          'linear-gradient(to right, rgba(245,247,248,0.06) 1px, transparent 1px),' +
          'linear-gradient(to bottom, rgba(245,247,248,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
      },
    },
  },
  plugins: [],
};

export default config;
