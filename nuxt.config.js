export default {
  target: 'static',
  ssr: false,
  // server: {
  // 	host: '0',
  // 	port:'5000' // default: localhost
  // },
  // Target: https://go.nuxtjs.dev/config-target
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BlogPersonal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [
      {
        src: 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js',
      }
    ],
    link: [
      { rel: 'icon', type: 'image', href: '/favicon.jpg' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Material+Icons+Outlined',
      },
    ],
  },
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dl4ytevqi/image/upload/',
    },
    domains: ['https://i.imgur.com'],
    screens: {
      xs: 320,
      sm: 620,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536,
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/css/global.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/image'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/image',
    'nuxt-precompress'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: { sourceMap: false },
    },
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
  loading: {
    color: '#e6e9ed',
    height: '5px',
  },
}
