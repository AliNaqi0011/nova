import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
    './src/helpers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)'],
        kalam: ['var(--font-kalam)'],
        'roboto-condensed': ['var(--font-roboto-condensed)'],
        'roboto-slab': ['var(--font-roboto-slab)'],
      },
      colors: {
        resume: {
          '10': '#f3f8ff',
          '50': '#E7EEFA',
          '100': '#C7D6E4',
          '200': '#A8B9CC',
          '300': '#889DB3',
          '400': '#7188A1',
          '500': '#59748F',
          '600': '#4C667E',
          '700': '#3C5268',
          '800': '#2E4052',
          '900': '#1C2C3A',
        },
        'custom-grey': '#e2e7ed',
        'custom-grey100': '#e5e5e5',
      },
      boxShadow: {
        'level-4px-0.25': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'level-8dp':
          '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
        'level-4dp':
          '0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
        'level-hard': 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
