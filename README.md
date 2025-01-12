# @nuxt-dev/medium-zoom

MediumZoom integrated for Nuxt.

[![CI](https://github.com/ntnyq/nuxt-module-medium-zoom/workflows/CI/badge.svg)](https://github.com/ntnyq/nuxt-module-medium-zoom/actions)
[![NPM VERSION](https://img.shields.io/npm/v/@nuxt-dev/medium-zoom/latest.svg)](https://www.npmjs.com/package/@nuxt-dev/medium-zoom/v/latest)
[![NPM DOWNLOADS](https://img.shields.io/npm/dy/@nuxt-dev/medium-zoom)](https://www.npmjs.com/package/@nuxt-dev/medium-zoom)
[![LICENSE](https://img.shields.io/github/license/ntnyq/nuxt-module-medium-zoom.svg)](https://github.com/ntnyq/nuxt-module-medium-zoom/blob/main/LICENSE)

## Install

```shell
npm i medium-zoom @nuxt-dev/medium-zoom -D
```

```shell
yarn add medium-zoom @nuxt-dev/medium-zoom -D
```

```shell
pnpm add medium-zoom @nuxt-dev/medium-zoom -D
```

## Usage

Add to your `nuxt.config.ts`:

```ts
export default {
  modules: [
    // other modules
    '@nuxt-dev/medium-zoom',
  ],

  mediumZoom: {
    // custom options
    selector: '#__nuxt :not(a) > img, [data-zoomable]',
  },
}
```

## Options

All options from [MediumZoom Options](https://github.com/francoischalifour/medium-zoom#options) are supported.

### selector

Image selector.

- **type**: `string`
- **required**: `false`
- **default**: `#__nuxt :not(a) > img, [data-zoomable]`

### delay

Delay time in millseconds.

- **type**: `number`
- **required**: `false`
- **default**: `500`

## Credits

- [vuepress/ecosystem - plugin-medium-zoom](https://github.com/vuepress/ecosystem/tree/main/plugins/features/plugin-medium-zoom)

## License

[MIT](./LICENSE) License © 2025-PRESENT [ntnyq](https://github.com/ntnyq)
