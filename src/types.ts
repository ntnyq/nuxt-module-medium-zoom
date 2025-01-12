import type { ZoomOptions } from 'medium-zoom'

export interface MediumZoomOptions extends ZoomOptions {
  /**
   * Delay in milliseconds
   *
   * @default 500
   */
  delay?: number

  /**
   * Selector of zoomable images
   *
   * @default `#__nuxt :not(a) > img, [data-zoomable]`
   */
  selector?: string
}
