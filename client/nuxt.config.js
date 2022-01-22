const title = 'TBD | Galamērķis';
const description = 'Galamērķis description ...';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: description},
      {name: 'format-detection', content: 'telephone=no'},
      // Social sharing tags
      {hid: 'og:title', property: 'og:title', content: title},
      {hid: 'og:type', property: 'og:type', content: 'website'},
      {hid: 'og:site_name', property: 'og:site_name', content: 'Galamerkis'},
      {hid: 'og:url', property: 'og:url', content: 'https://www.galamerkis.lv'},
      {hid: 'og:description', property: 'og:description', content: description},
      {hid: 'og:image', name: 'og:image', content: 'https://www.galamerkis.lv/galamerkis-og.png'},
      {hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image'},
      {hid: 'twitter:description', name: 'twitter:description', content: description},
      {hid: 'twitter:image', name: 'twitter:image', content: 'https://www.galamerkis.lv/galamerkis-og.png'},
    ],
    bodyAttrs: {
      class: 'bg-gray-100 font-sans leading-normal tracking-normal'
    },
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.svg'},
      {rel: 'canonical', href: 'https://www.galamerkis.lv/'},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: process.env.NGINX_URL,
    browserBaseURL: process.env.FRONTEND_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
