/**
 * @file nuxt config
 */

export default defineNuxtConfig({
  compatibilityDate: '2025-07-12',
  css: ['@unocss/reset/tailwind.css'],
  mediumZoom: {},
  modules: ['@unocss/nuxt', '@nuxt-dev/medium-zoom'],
  ssr: false,
  app: {
    head: {
      title: 'Nuxt Playground',
    },
  },
  experimental: {
    appManifest: false,
  },
  nitro: {
    preset: 'static',
  },
})
