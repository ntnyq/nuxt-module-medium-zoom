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

    addPlugin({
      name: 'medium-zoom',
      src: resolve('runtime/plugin'),
      mode: 'client',
    })
  },
})

declare module '@nuxt/schema' {
  interface NuxtConfig {
    mediumZoom?: MediumZoomOptions
  }

  interface NuxtOptions {
    // @ts-expect-error ts2687
    mediumZoom?: MediumZoomOptions
  }

  interface PublicRuntimeConfig {
    // @ts-expect-error ts2687
    mediumZoom?: Required<MediumZoomOptions>
  }
}
