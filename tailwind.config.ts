import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'main': '#161618',
        'secondary': '#fecb0b',
      },
      textColor: {
        'text1': '#d1d5db',
        'text2': '#fecb0b', 
        'text3': '#161618', 
      },
    },
  },
  plugins: [],
}
export default config
