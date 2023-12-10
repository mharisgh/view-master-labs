import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes: {
      // master: {
      //   '0%': {transform: 'translateX(0px)'},
      //   '25%': {transform: 'translateX(60px)'},
      //   '50%': {transform: 'translateX(-60px)'},
      //   '100%': {transform: 'translateX(0px)'},
      // },
      master: {
        '0%': {transform: 'translateX(-80px) rotate(0deg)'},
        '33%': { transform: 'rotate(2deg)'},
        '50%': {transform: 'translateX(80px)'},
        '66%': { transform: 'rotate(-2deg)'},
        '100%': {transform: 'translateX(-80px) rotate(0deg)'},
      },
      mastermobile: {
        '0%': {transform: 'translateX(-40px) rotate(0deg)'},
        '33%': { transform: 'rotate(2deg)'},
        '50%': {transform: 'translateX(40px)'},
        '66%': { transform: 'rotate(-2deg)'},
        '100%': {transform: 'translateX(-40px) rotate(0deg)'},
      },
      device:{
        '0%': { transform: 'rotate(0deg)'},
        '33%': { transform: 'rotate(3deg)'},
        '66%': { transform: 'rotate(-3deg)'},
        '100%': { transform: 'rotate(0deg)'},
      }
    },
  },
  plugins: [],
}
export default config
