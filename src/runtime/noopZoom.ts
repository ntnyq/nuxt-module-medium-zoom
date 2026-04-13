import type { Zoom } from 'medium-zoom'

export function createNoopZoom(): Zoom {
  const zoom = {
    attach: () => zoom,
    clone: () => zoom,
    detach: () => zoom,
    off: () => zoom,
    on: () => zoom,
    open: () => zoom,
    close: () => zoom,
    toggle: () => zoom,
    update: () => zoom,
    getOptions: () => ({}),
    getImages: () => [],
    refresh: () => {},
  }

  return zoom as unknown as Zoom
}
