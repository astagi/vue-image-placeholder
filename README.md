# Build Vue Image Placeholder using TDD

[![Build Status](https://travis-ci.org/astagi/tdd-with-vue.svg?branch=master)](https://travis-ci.org/astagi/tdd-with-vue) [![codecov](https://codecov.io/gh/astagi/tdd-with-vue/branch/master/graph/badge.svg)](https://codecov.io/gh/astagi/tdd-with-vue)

This is the source code for [Writing your first Vue component using TDD](Writing your first Vue component using TDD). In this tutorial we'll learn the basic concepts of Test Driven Development (TDD) building a simple, reusable Vue component with Typescript called `ImagePlaceholder` to fetch images from [LoremFlickr](https://loremflickr.com/), a simple images service to get random images specifying parameters like width, height, filters, categories.. inside a url.

For example to get an image `320x240` from `Brazil` or `Rio` you can fetch [https://loremflickr.com/320/240/brazil,rio](https://loremflickr.com/320/240/brazil,rio)

<img src="https://loremflickr.com/320/240/brazil,rio"/>

There are a lot of options in LoremFlickr, in this tutorial we'll focus on developing a simple component to get an image from LoremFlickr with a specific `width` and `height` and filtering by `categories`.

## Use it in your app

```ts
import ImagePlaceholder from 'vue-image-placeholder';
```

```html
<ImagePlaceholder width=500 height=250 images="dog" />
```

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
