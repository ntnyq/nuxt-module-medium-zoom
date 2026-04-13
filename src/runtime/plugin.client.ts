import { defineNuxtPlugin, useRouter, useRuntimeConfig } from '#app'
import { mediumZoomSymbol } from './composables/useMediumZoom'
import type { ZoomOptions } from 'medium-zoom'

export default defineNuxtPlugin({
  name: 'medium-zoom',
  async setup(nuxtApp) {
    const router = useRouter()
    const runtimeConfig = useRuntimeConfig()
    const zoomOptions = runtimeConfig.public.mediumZoom

    if (!zoomOptions) {
      return
    }

    const { delay = 0, selector, ...mediumZoomOptions } = zoomOptions
    const resolvedSelector =
      selector ?? '#__nuxt :not(a) > img, [data-zoomable]'

    const { default: mediumZoom } = await import('medium-zoom')
    const zoom = mediumZoom(resolvedSelector, mediumZoomOptions as ZoomOptions)

    zoom.refresh = (newSelector = resolvedSelector) => {
      zoom.detach()
      zoom.attach(newSelector)
    }

    nuxtApp.vueApp.provide(mediumZoomSymbol, zoom)

    nuxtApp.hook('app:mounted', async () => {
      await waitFor(delay)
      zoom.refresh()
    })

    router.afterEach(async () => {
      await waitFor(delay)
      zoom.refresh()
    })
  },
})

function waitFor(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
