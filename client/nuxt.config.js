export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
 mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   ** See https://nuxtjs.org/api/configuration-modules/#buildmodules
   */
  buildModules: [
    '@nuxtjs/pwa',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://nuxtjs.org/api/configuration-modules/
    '@nuxtjs/pwa',
  ],
  /*
   ** Build configuration
   {

   ** See https://nuxtjs.org/api/configuration-build/
   */
  pwa: {
    icon: {
      /* icon options */
      source: './static/icon.png'
    },
    manifest: {
      lang: 'en',
      short_name: 'nuxt',
      name: 'nuxt',
      start_url: '/',
      display: 'standalone',
      theme_color: '#FFFFFF'
    },
  },
  build: {
    /*
    ** You can extend webpack config here
    */
  },
}
