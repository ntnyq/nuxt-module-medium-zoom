import { beforeEach, describe, expect, it, vi } from 'vitest'

const addImports = vi.fn()
const addPlugin = vi.fn()

vi.mock('@nuxt/kit', () => ({
  addImports,
  addPlugin,
  createResolver: () => ({
    resolve: (path: string) => `/virtual/${path}`,
  }),
  defineNuxtModule: (moduleOptions: unknown) => moduleOptions,
}))

describe('module setup', () => {
  beforeEach(() => {
    addImports.mockReset()
    addPlugin.mockReset()
  })

  it('registers client and server plugins for SSR-safe injection', async () => {
    const module = (await import('../src/module')).default as {
      setup?: (
        options: { selector: string; delay: number },
        nuxt: {
          options: {
            css: string[]
            runtimeConfig: { public: Record<string, unknown> }
          }
        },
      ) => void
    }

    const nuxt = {
      options: {
        css: [],
        runtimeConfig: {
          public: {},
        },
      },
    }

    module.setup?.({ selector: '.zoomable', delay: 100 }, nuxt)

    expect(addImports).toHaveBeenCalledTimes(2)
    expect(addPlugin).toHaveBeenCalledTimes(2)
    expect(addPlugin).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'medium-zoom-client',
        src: '/virtual/runtime/plugin.client',
        mode: 'client',
      }),
    )
    expect(addPlugin).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'medium-zoom-server',
        src: '/virtual/runtime/plugin.server',
        mode: 'server',
      }),
    )
  })
})
