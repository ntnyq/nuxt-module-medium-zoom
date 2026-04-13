declare module '#app' {
  interface RouterLike {
    afterEach: (guard: () => Promise<void> | void) => void
  }

  interface RuntimeConfigLike {
    public: {
      mediumZoom?: {
        delay: number
        selector: string
        [key: string]: unknown
      }
    }
  }

  interface NuxtAppLike {
    hook: (name: 'app:mounted', callback: () => Promise<void> | void) => void
    vueApp: {
      provide: (key: symbol, value: unknown) => void
    }
  }

  interface NuxtPluginObject {
    name?: string
    setup: (nuxtApp: NuxtAppLike) => Promise<void> | void
  }

  export function defineNuxtPlugin(plugin: NuxtPluginObject): NuxtPluginObject
  export function useRouter(): RouterLike
  export function useRuntimeConfig(): RuntimeConfigLike
}
