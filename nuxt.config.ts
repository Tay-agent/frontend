// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  css: [
    "~/assets/styles/main.scss",
    "~/assets/styles/_media.scss"
  ],

  modules: ["@nuxt/fonts"],
  fonts: {
      defaults: {
        weights: ['300 700'],
      },
      provider: 'google',
      processCSSVariables: true,
    },
})