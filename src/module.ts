import {
  addImports,
  addPlugin,
  createResolver,
  defineNuxtModule,
} from '@nuxt/kit'
import defu from 'defu'
import { name, version } from '../package.json'
import type { MediumZoomOptions } from './types'

export * from './types'

export default defineNuxtModule<MediumZoomOptions>({
  meta: {
    name,
    version,
    configKey: 'mediumZoom',
    compatibility: {
      nuxt: '>=3.0',
    },
  },

  defaults: {
    selector: '#__nuxt :not(a) > img, [data-zoomable]',
    delay: 500,
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    nuxt.options.css ??= []
    nuxt.options.css.push('medium-zoom/dist/style.css')

    nuxt.options.runtimeConfig.public.mediumZoom = defu(
      nuxt.options.runtimeConfig.public.mediumZoom,
      options,
    )

    addImports({
      from: resolve('runtime/composables/useMediumZoom'),
      name: 'useMediumZoom',
    })

    addImports({
      from: resolve('runtime/composables/useMediumZoom'),
      name: 'useMediumZoomSafe',
    })

    addPlugin({
      name: 'medium-zoom-client',
      src: resolve('runtime/plugin.client'),
      mode: 'client',
    })

    addPlugin({
      name: 'medium-zoom-server',
      src: resolve('runtime/plugin.server'),
      mode: 'server',
    })
  },
})

declare module '@nuxt/schema' {
  interface NuxtConfig {
    mediumZoom?: MediumZoomOptions
  }

  interface PublicRuntimeConfig {
    mediumZoom?: Required<MediumZoomOptions>
  }
}
