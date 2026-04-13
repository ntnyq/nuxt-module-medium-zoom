import { inject } from 'vue'
import type { Zoom } from 'medium-zoom'
import type { InjectionKey } from 'vue'

export const mediumZoomSymbol: InjectionKey<Zoom> = Symbol('medium-zoom')

declare module 'medium-zoom' {
  interface Zoom {
    refresh: (selector?: string) => void
  }
}

/**
 * Client only composable to access the medium-zoom instance provided by the provider component. It will throw an error if the provider is not found.
 */
export function useMediumZoom(): Zoom {
  const zoom = inject(mediumZoomSymbol)

  if (!zoom) {
    throw new Error('useMediumZoom() is called without provider')
  }

  return zoom
}

/**
 * Safe composable to access the medium-zoom instance provided by the provider component. It will return null if the provider is not found.
 */
export function useMediumZoomSafe(): Zoom | null {
  return inject(mediumZoomSymbol, null)
}
