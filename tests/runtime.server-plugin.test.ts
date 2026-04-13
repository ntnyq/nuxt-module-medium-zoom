import { describe, expect, it, vi } from 'vitest'

const defineNuxtPlugin = vi.fn((plugin: unknown) => plugin)
const mediumZoomSymbol = Symbol('medium-zoom-test')

vi.mock('#app', () => ({
  defineNuxtPlugin,
}))

vi.mock('../src/runtime/composables/useMediumZoom', () => ({
  mediumZoomSymbol,
}))

describe('runtime server plugin', () => {
  it('provides noop medium-zoom instance on server', async () => {
    const plugin = (await import('../src/runtime/plugin.server')).default as {
      setup: (nuxtApp: {
        vueApp: { provide: (key: symbol, value: unknown) => void }
      }) => void
    }

    const provide = vi.fn()
    const nuxtApp = {
      vueApp: {
        provide,
      },
    }

    plugin.setup(nuxtApp)

    expect(provide).toHaveBeenCalledTimes(1)
    const call = provide.mock.calls[0]
    expect(call).toBeTruthy()
    const symbol = call?.[0]
    const zoom = call?.[1]
    expect(symbol).toBe(mediumZoomSymbol)
    expect(zoom).toBeTruthy()
    expect((zoom as Record<string, unknown>).refresh).toBeTypeOf('function')
    expect((zoom as Record<string, unknown>).attach).toBeTypeOf('function')
    expect((zoom as Record<string, unknown>).detach).toBeTypeOf('function')
  })
})
