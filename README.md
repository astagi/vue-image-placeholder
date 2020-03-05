# Vue Image Placeholder

[![Build Status](https://travis-ci.org/astagi/vue-image-placeholder.svg?branch=master)](https://travis-ci.org/astagi/vue-image-placeholder) [![codecov](https://codecov.io/gh/astagi/vue-image-placeholder/branch/master/graph/badge.svg)](https://codecov.io/gh/astagi/vue-image-placeholder)

🌉 Multiservice Image Placeholder Vue component

## Installation

```sh
yarn add vue-image-placeholder
```

## Use it in your app

```ts
import ImagePlaceholder from 'vue-image-placeholder';
```

```html
<ImagePlaceholder width=500 height=250 images="cats" />
```

It renders

<img src="https://loremflickr.com/500/250/cats"/>

`height` and `images` are optional.

Image Placeholder component supports also [Placeholder.com](https://placeholder.com/) service, use `text` to show a label in the placeholder

```html
<ImagePlaceholder width=250 text="Hello Vue!" foreground="#34495e" background="#41B883"/>
```

<img src="https://via.placeholder.com/250x250/41B883/34495e?text=Hello+Vue%21"/>


## Properties

`width` final image width (required)

`height` final image height (default is equal to width)

`images` (if not specified the service used is [https://placeholder.com/](https://placeholder.com/)):
  - `single value` returns an image of one category (e.g. 'cats').
  - `comma separated value `returns an image with both categories (e.g. 'animals,cat').
  - `pipe separated value` returns an image of one category (e.g. 'animal|cats').
  - `'murray' `returns an image of Bill Murray.
  - `'seagal'` return an image of Steve Seagal.

The following properties are only for `Placeholder.com` service:

`text` text to show inside the image.

`background` background color for the placeholder (e.g. #000000).

`foreground` foreground color for the placeholder (e.g. #FFFFFF).

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
