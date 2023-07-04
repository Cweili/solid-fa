# solid-fa

[![npm][badge-version]][npm]
[![bundle size][badge-size]][bundlephobia]
[![npm downloads][badge-downloads]][npm]
[![license][badge-license]][license]


[![github][badge-issues]][github]
<!-- [![build][badge-build]][workflows]
[![coverage][badge-coverage]][coveralls] -->

Tiny [FontAwesome][fontawesome] component for [SolidJS][solid].

* FontAwesome version 5 and 6
* FontAwesome svg icons
* Tree-shakable, only import used icons
* No CSS file required
* FontAwesome layering
* FontAwesome duotone icons

<!-- [Documents and examples][doc]. -->

## Installation

```shell
npm install solid-fa
```

Install FontAwesome icons via [official packages][fontawesome-npm], for example:

```shell
npm install @fortawesome/free-solid-svg-icons
```

## Usage

```jsx
import Fa from 'solid-fa'
import { faFlag } from '@fortawesome/free-solid-svg-icons'

function App (props) {
  return <Fa icon={faFlag} />
}
```

## `Fa` Properties

```jsx
<Fa
  icon={faFlag}
  size="2x"
  color="#ff0000"
  fw
  pull="left"
  scale={1.2}
  translateX={0.2}
  translateY={0.2}
  rotate={90}
  flip="horizontal"
  spin
  pulse
/>
```

* `icon`: icon from FontAwesome packages, for example: `@fortawesome/free-solid-svg-icons`
* `size`: `string` values `xs`, `sm`, `lg` or `2x`, `3x`, `4x`, ..., `10x`
* `color`: `string` icon color, default `currentColor`
* `fw`: `boolean` fixed width
* `pull`: `string` values `left`, `right`
* `scale`: `number | string` transform scale, unit is `em`, default `1`
* `translateX`: `number | string` transform position X, unit is `em`, default `0`
* `translateY`: `number | string` transform position Y, unit is `em`, default `0`
* `flip`: `string` values `horizontal`, `vertical`, `both`
* `rotate`: `number | string` values `90`, `180`, `270`, `30`, `-30` ...
* `spin`: `boolean` spin icons
* `pulse`: `boolean` pulse spin icons

## Layering &amp; Text

```jsx
import Fa, {
  FaLayers,
  FaLayersText,
} from 'solid-fa'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'

function App (props) {
  return (
    <FaLayers
      size="4x"
      pull="left"
    >
      <Fa icon={faCertificate} />
      <FaLayersText
        scale={0.25}
        rotate={-30}
        color="white"
        style="font-weight: 900"
      >
        NEW
      </FaLayersText>
    </FaLayers>
  )
}
```

### `FaLayers` Properties

* `size`: `string` values `xs`, `sm`, `lg` or `2x`, `3x`, `4x`, ..., `10x`
* `pull`: `string` values `left`, `right`

### `FaLayersText` Properties

* `size`: `string` values `xs`, `sm`, `lg` or `2x`, `3x`, `4x`, ..., `10x`
* `color`: `string` icon color, default `currentColor`
* `scale`: `number | string` transform scale, unit is `em`, default `1`
* `translateX`: `number | string` transform position X, unit is `em`, default `0`
* `translateY`: `number | string` transform position Y, unit is `em`, default `0`
* `flip`: `string` values `horizontal`, `vertical`, `both`
* `rotate`: `number | string` values `90`, `180`, `270`, `30`, `-30` ...

## Duotone Icons

```jsx
import Fa from 'solid-fa'
import { faFlag } from '@fortawesome/pro-duotone-svg-icons'

function App (props) {
  return (
    <Fa
      icon={faFlag}
      primaryColor="red"
      secondaryColor="#000000"
      primaryOpacity={0.8}
      secondaryOpacity={0.6}
      swapOpacity
    />
  )
}
```

### Duotone Icons Theme

```jsx
import Fa from 'solid-fa'
import { faFlag } from '@fortawesome/pro-duotone-svg-icons'

function App (props) {
  const theme = {
    primaryColor: 'red',
    secondaryColor: '#000000',
    primaryOpacity: 0.8,
    secondaryOpacity: 0.6,
  }

  return (
    <Fa
      icon={faFlag}
      {...theme}
    />
  )
}
```

[fontawesome]: https://fontawesome.com/
[fontawesome-npm]: https://www.npmjs.com/search?q=%40fortawesome%20svg%20icons
[solid]: https://www.solidjs.com/

[doc]: https://cweili.github.io/solid-fa/

[badge-version]: https://img.shields.io/npm/v/solid-fa.svg
[badge-downloads]: https://img.shields.io/npm/dt/solid-fa.svg
[npm]: https://www.npmjs.com/package/solid-fa

[badge-size]: https://img.shields.io/bundlephobia/minzip/solid-fa.svg
[bundlephobia]: https://bundlephobia.com/result?p=solid-fa

[badge-license]: https://img.shields.io/npm/l/solid-fa.svg
[license]: https://github.com/Cweili/solid-fa/blob/master/LICENSE

[badge-issues]: https://img.shields.io/github/issues/Cweili/solid-fa.svg
[github]: https://github.com/Cweili/solid-fa

[badge-build]: https://img.shields.io/github/actions/workflow/status/Cweili/solid-fa/ci.yml?branch=master
[workflows]: https://github.com/Cweili/solid-fa/actions/workflows/ci.yml?query=branch%3Amaster

[badge-coverage]: https://img.shields.io/coveralls/github/Cweili/solid-fa/master.svg
[coveralls]: https://coveralls.io/github/Cweili/solid-fa?branch=master
