/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAFAF7',
        ink: '#141414',
        muted: '#6B7280',
        line: '#E8E6E1',
        accent: '#2438FF',
        accentdark: '#1A2BCC',
        card: '#FFFFFF',
        tint: '#EFF1FF'
      },
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace']
      },
      boxShadow: {
        card: '0 1px 2px rgba(20,20,20,0.06), 0 8px 24px rgba(20,20,20,0.07)',
        pop: '0 12px 40px rgba(36,56,255,0.18)'
      }
    }
  },
  plugins: []
}
