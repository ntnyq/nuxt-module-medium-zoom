export default defineNuxtConfig({
  compatibilityDate: '2025-01-12',
  mediumZoom: {},
  modules: ['@unocss/nuxt', '@nuxt-dev/medium-zoom'],
  ssr: false,
  app: {
    head: {
      title: '@nuxt-dev/medium-zoom',
    },
  },
  experimental: {
    appManifest: false,
  },
})