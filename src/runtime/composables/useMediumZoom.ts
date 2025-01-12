import { inject } from 'vue'
import type { Zoom } from 'medium-zoom'
import type { InjectionKey } from 'vue'

export const mediumZoomSymbol: InjectionKey<Zoom> = Symbol('medium-zoom')

declare module 'medium-zoom' {
  interface Zoom {
    refresh: (selector?: string) => void
  }
}

export function useMediumZoom(): Zoom {
  const zoom = inject(mediumZoomSymbol)

  if (!zoom) {
    throw new Error('useMediumZoom() is called without provider')
  }

  return zoom
}
