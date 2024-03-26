import type { Config } from 'tailwindcss';

const moblieExtend = {
  fontSize: {
    'mb-20': '20px',
    'mb-22': '22px',
    'mb-24': '24px',
    'mb-28': '28px',
    'mb-36': '36px',
    'mb-42': '42px',
    'mb-48': '48px',
  },
  textColor: {
    'color-ccc': '#ccc',
    'color-333': '#333',
  },
};

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        ...moblieExtend.fontSize,
      },
      colors: {
        ...moblieExtend.textColor,
      },
      animation: {
        'show-drawer': 'show-drawer 0.3s ease-out',
        'show-drawer-mask': 'show-drawer-mask 0.3s ease-out 1 normal forwards',
      },
      keyframes: {
        'show-drawer': {
          '0%': { transform: 'translateX(648px)', opacity: '0' },
          '66%': { transform: 'translateX(432px)', opacity: '0' },
          '100%': { transform: 'translateX(0px)', opacity: '1' },
        },
        'show-drawer-mask': {
          from: { opacity: '0', backgroundColor: 'none' },
          to: { opacity: '0.5', backgroundColor: '#000' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
