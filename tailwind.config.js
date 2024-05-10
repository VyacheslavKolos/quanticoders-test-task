const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '668px',
      laptop: '1299px',

      540: '540px',
      620: '620px',
      800: '800px',
      830: '830px',
      834: '834px',
      860: '860px',
      1024: '1024px',
      1196: '1196px',
      1235: '1235px',
      1440: '1440px',
      1920: '1920px',
    },

    colors: {
      primary: '#FF611A',
      ['primary-colors']: { 50: '#F9F5FF' },
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

      ['gray-new']: {
        100: '#242A34',
        150: '#1D1B20',
        300: '#D0D5DD',
        400: '#E3E6EA',
        500: '#EFF1F4',
        505: '#E6E6E8',
      },

      additional: {
        100: '#9c5d9a',
        200: '#FFB08D',
        300: '#FFDFD1',
        350: '#FFEBEB',
        400: '#FFF2EC',
        500: '#FEE4E2',
      },

      system: {
        100: '#03AB5A',
        200: '#FF4035',
        300: '#FFD324',
        400: '#E4C00E',
        500: '#FFF7D7',
      },

      green: {
        500: '#DFFBED',
      },

      error: {
        300: '#FDA29B',
        400: '#FFECEB',
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
      ['solid-1']: '0px 0px 0px 1px',
      ['solid-2']: '0px 0px 0px 2px',
      ['solid-3']: '0px 0px 0px 3px',
      light: '0px 0px 18px 0px rgba(0, 0, 0, 0.05)',
      checkbox: '0px 0px 0px 3.75px #FFDFD1',
      ['dropdown-menu']: '0px 0px 20px 0px rgba(0, 0, 0, 0.05)',
      'setup-board': '0px 20px 32px 0px rgba(0, 0, 0, 0.12)',
      'manage-role': '0px 6px 10px 0px rgba(0, 0, 0, 0.18)',
    },

    extend: {
      backgroundImage: {
        'gradient-line': 'linear-gradient(90deg, rgba(229,54,86,1) 50%, rgba(143,103,170,1) 100%)',

        'gradient-setup-orange': 'linear-gradient(197deg, #F8AB65 7.32%, #F85900 81.4%)',

        'nav-circle': 'linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.10) 23.6%)',
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
