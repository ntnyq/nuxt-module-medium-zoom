import mediumZoom from 'medium-zoom'
import { defineNuxtPlugin, useRouter, useRuntimeConfig } from '#app'
import { mediumZoomSymbol } from './composables/useMediumZoom'

export default defineNuxtPlugin({
  name: 'medium-zoom',
  setup(nuxtApp) {
    const runtimeConfig = useRuntimeConfig()
    const zoomOptions = runtimeConfig.public.mediumZoom

    if (!zoomOptions || !import.meta.client) return

    const zoom = mediumZoom(zoomOptions)

    zoom.refresh = (newSelector = zoomOptions.selector) => {
      zoom.detach()
      zoom.attach(newSelector)
    }

    nuxtApp.vueApp.provide(mediumZoomSymbol, zoom)

    const router = useRouter()

    router.afterEach(async () => {
      await waitFor(zoomOptions.delay)
      zoom.refresh()
    })
  },
})

function waitFor(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
