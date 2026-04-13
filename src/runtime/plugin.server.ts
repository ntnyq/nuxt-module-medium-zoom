import { defineNuxtPlugin } from '#app'
import { mediumZoomSymbol } from './composables/useMediumZoom'
import { createNoopZoom } from './noopZoom'

export default defineNuxtPlugin({
  name: 'medium-zoom-server',
  setup(nuxtApp) {
    nuxtApp.vueApp.provide(mediumZoomSymbol, createNoopZoom())
  },
})
