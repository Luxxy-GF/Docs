import theme from '@nuxt/content-theme-docs';

export default theme({
  loading: { color: '#48bb78' },
  generate: {
    fallback: '404.html', // for Netlify
    routes: ['/'] // give the first url to start crawling
  },
  router: {
    base: '/Docs/'
  },
  i18n: {
    locales: () => [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English'
      }
    ],
    defaultLocale: 'en'
  },
  content: {
    liveEdit: false
  },
  buildModules: []
});