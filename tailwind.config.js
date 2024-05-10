const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '668px',
      laptop: '1299px',
    },

    colors: {
      secondary: '#FCFCFD',

      black: '#191613',
      white: '#FFFFFF',

      gray: {
        0: '#242A34',
        100: '#8094b3',
        150: '#f3f7fa',
        200: '#70738c',
        300: '#dae4ef',
        400: '#c5d5e6',
        500: '#F2F4F7',
        600: '#F9FAFB',
      },

      additional: {
        100: '#9c5d9a',
        500: '#f8e5ff',
      },

      system: {
        100: '#03AB5A',
        200: '#FF4035',
        300: '#FFD324',
        400: '#E4C00E',
        500: '#FFF7D7',
      },

      blue: {
        100: '#363b5d',
        200: '#83b3eb',
      },
    },

    fontFamily: {
      lexend: ['Lexend', 'sans-serif'],
      'source-sans': ['"Source Sans 3"', 'sans-serif'],
    },

    fontSize: {
      ['large-title']: ['72px', { lineHeight: '88px', fontWeight: 800 }],
      h1: ['38px', { lineHeight: '48px', fontWeight: 800 }],
      h2: ['30px', { lineHeight: '40px', fontWeight: 500 }],
      h3: ['24px', { lineHeight: '32px', fontWeight: 500 }],
      h4: ['20px', { lineHeight: '28px', fontWeight: 800 }],
      ['button-title']: ['16px', { lineHeight: '24px', fontWeight: 500 }],
      subtitle: ['14px', { lineHeight: '20px', fontWeight: 700, letterSpacing: '0.5px' }],
      tretiary: ['14px', { lineHeight: 'normal', fontWeight: 400 }],
      subtitle2: ['12px', { lineHeight: '16px', fontWeight: 500 }],
      main: ['20px', '28px'],
      ['secondary-title']: ['16px', '24px'],
    },

    borderRadius: {
      sm: '8px',
      md: '10px',
      lg: '12px',
    },

    boxShadow: {
      ['solid-1']: '0px 0px 0px 2px',
      ['solid-3']: '0px 0px 0px 3px',
    },

    extend: {
      backgroundImage: {
        'gradient-line': 'linear-gradient(90deg, rgba(229,54,86,1) 50%, rgba(143,103,170,1) 100%)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

    plugin(function ({ addVariant }) {
      addVariant('group-with-active', ':merge(.group).active &'); // custom CSS
      addVariant('group-no-active', ':merge(.group):not(.active) &');
    }),
  ],
};
