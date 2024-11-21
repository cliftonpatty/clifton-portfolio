import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxtjs/google-fonts',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  googleFonts: {
    families: {
      'Barrio': true,
    },
    display: 'swap',
    preload: true,
    download: false,
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})