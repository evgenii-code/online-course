const PORT = process.env.PORT || '3000';
const API_URL = process.env.API_URL || '/';
const BASE_URL = process.env.BASE_URL || '/';
const repositoryName = process.env.REPOSITORY_NAME || '/';
const routerBase = process.env.NODE_ENV === 'production' ? repositoryName : '/';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'online-course',

    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      },
    ],

    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: `${routerBase}favicon.ico`
      },
      {
        rel: 'stylesheet',
        href: `${routerBase}fonts/fonts.css`
      },
    ],
  },

  target: 'static',

  router: {
    trailingSlash: true,
    base: routerBase
  },

  server: {
    host: '0.0.0.0',
    port: PORT,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css/normalize.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vee-validate.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{
      path: '~/components/',
      prefix: 'app'
    },
    {
      path: '~/components/UI/',
      prefix: 'v'
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://i18n.nuxtjs.org
    '@nuxtjs/i18n',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: API_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  i18n: {
    baseUrl: BASE_URL,
    locales: [{
      code: 'en',
      name: 'English',
      iso: 'en',
      file: 'en.js',
    }, ],
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,
    },
    strategy: 'prefix_and_default',
    lazy: true, // loads only default and fallback locale
    seo: true,
    langDir: 'lang/',
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  publicRuntimeConfig: {
    baseURL: BASE_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules'],
  },
}
