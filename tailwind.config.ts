import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0D0D0D',
        'bg-secondary': '#1A1A1A',
        'bg-tertiary': '#242424',
        'text-primary': '#E5E7EB',
        'text-secondary': '#9CA3AF',
        'text-muted': '#6B7280',
        'accent-primary': '#00FF85',
        'accent-secondary': '#1E90FF',
        'accent-tertiary': '#FF0099',
        'accent-gold': '#FFD700',
        'accent-cyan': '#00FFFF',
        'graph-node': '#4ADE80',
        'graph-edge': '#3B82F6',
        'code-bg': '#111827',
        'code-border': '#374151',
      },
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        inter: ['var(--font-inter)'],
        jetbrains: ['var(--font-jetbrains)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
