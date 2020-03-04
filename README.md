# Build Vue Image Placeholder using TDD

[![Build Status](https://travis-ci.org/astagi/vue-image-placeholder.svg?branch=master)](https://travis-ci.org/astagi/vue-image-placeholder) [![codecov](https://codecov.io/gh/astagi/vue-image-placeholder/branch/master/graph/badge.svg)](https://codecov.io/gh/astagi/vue-image-placeholder)

## Installation

```sh
yarn add vue-image-placeholder
```

## Use it in your app

```ts
import ImagePlaceholder from 'vue-image-placeholder';
```

```html
<ImagePlaceholder width=500 height=250 images="cat" />
```

It renders

<img src="https://loremflickr.com/500/250/cat"/>

Props `height` and `images` are optional.

## Project setup for development

```sh
yarn install
```

### Compiles and minifies for production

```sh
yarn build
```

### Run unit tests

```sh
yarn test:unit
```

### Lints and fixes files

```sh
yarn lint
```
