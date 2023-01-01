module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './assets/*.scss',
    './**/*.md',
    './**/*.html',
  ],
  darkMode: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans'],
        'major-mono-display': ['"Major Mono Display"', 'cursive']
      },
    },
  },
  variants: {},
}