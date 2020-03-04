<template>
  <img :src="url">
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ImagePlaceholder extends Vue {

  @Prop({required: true}) readonly width!: number
  @Prop({required: false}) readonly height!: number
  @Prop({required: false, default: 'random'}) readonly images!: string

  get url(): string {
    return `https://loremflickr.com/${this.width}/${this.height || this.width}/${this.images}`
  }

}
</script>
