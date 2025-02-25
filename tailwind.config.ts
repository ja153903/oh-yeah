import tailwindcssTypography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'

import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.tsx',
  ],
  theme: {
    extend: {
      colors: {
        base03: '#002b36',
        base02: '#073642',
        base01: '#586e75',
        base00: '#657b83',
        base0: '#839496',
        base1: '#93a1a1',
        base2: '#eee8d5',
        base3: '#002b36',
        yellow: '#b58900',
        orange: '#cb4b16',
        red: '#dc322f',
        magenta: '#d33682',
        violet: '#6c71c4',
        blue: '#268bd2',
        cyan: '#2aa198',
        green: '#859900',
      },
    },
  },
  plugins: [
    tailwindcssTypography(),
    plugin(function ({ addVariant }) {
      addVariant(
        'prose-inline-code',
        '&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))'
      )
      addVariant('prose-math-formula', '&.prose h2:has(span.katex)')
    }),
  ],
} satisfies Config
