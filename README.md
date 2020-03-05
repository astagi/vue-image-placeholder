# Vue Image Placeholder

[![Build Status](https://travis-ci.org/astagi/vue-image-placeholder.svg?branch=master)](https://travis-ci.org/astagi/vue-image-placeholder) [![codecov](https://codecov.io/gh/astagi/vue-image-placeholder/branch/master/graph/badge.svg)](https://codecov.io/gh/astagi/vue-image-placeholder) [![downloads](https://img.shields.io/npm/dm/vue-image-placeholder.svg)](https://www.npmjs.com/package/vue-image-placeholder) [![npm-version](https://img.shields.io/npm/v/vue-image-placeholder.svg)](https://www.npmjs.com/package/vue-image-placeholder) [![license](https://img.shields.io/npm/l/express.svg)]()

🌉 Multiservice Image Placeholder Vue component

## Installation

```sh
yarn add vue-image-placeholder
```

## Use it in your app

```ts
import ImagePlaceholder from 'vue-image-placeholder';
```

Render an image with `cats` from [LoremFlickr](https://loremflickr.com/) service

```html
<ImagePlaceholder width=500 height=250 images="cats" />
```

<img src="https://loremflickr.com/500/250/cats"/>

Image Placeholder component also supports [Placeholder.com](https://placeholder.com/) service, use `text` to show a label in the placeholder

```html
<ImagePlaceholder
  width=250 text="Hello Vue!"
  foreground="#34495e" background="#41B883"
/>
```

<img src="https://via.placeholder.com/250x250/41B883/34495e?text=Hello+Vue%21"/>


## Properties

`width` final image width (required)

`height` final image height (default is equal to width)

`images` category/categories for the image (if not specified the main service used is [https://placeholder.com/](https://placeholder.com/)):
  - `single value` returns an image of one category (e.g. 'cats').
  - `comma separated value` returns an image belonging to both categories (e.g. 'animals,cat').
  - `pipe separated value` returns an image belonging to one of the categories (e.g. 'animal|cats').
  - `'murray' `returns an image of Bill Murray from [Fill Murray](https://www.fillmurray.com/) service.
  - `'seagal'` return an image of Steve Seagal from [Steven Segallery](https://www.stevensegallery.com/) service.

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
