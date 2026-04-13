/**
 * @file nuxt config
 */

export default defineNuxtConfig({
  compatibilityDate: '2026-04-12',
  css: ['@unocss/reset/tailwind.css'],
  mediumZoom: {},
  modules: ['@unocss/nuxt', '@nuxt-dev/medium-zoom'],
  app: {
    head: {
      title: 'Nuxt Playground',
    },
  },
  experimental: {
    appManifest: false,
    payloadExtraction: 'client',
  },
  nitro: {
    preset: 'static',
  },
  vite: {
    optimizeDeps: {
      include: ['medium-zoom'],
    },
    resolve: {
      dedupe: ['nitropack'],
    },
  },
})
