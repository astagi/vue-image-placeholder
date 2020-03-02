<template>
  <img :src="url">
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ImagePlaceholder extends Vue {

  @Prop({required: true}) readonly width!: number
  @Prop({required: false, default: 0}) readonly height!: number
  @Prop({required: false, default: 'random'}) readonly images!: string

  get url(): string {
    return this.getPlaceholderUrl();
  }

  private getPlaceholderUrl(): string {
    let height = this.height;
    if (this.height == 0) {
      height = this.width;
    }
    return `https://loremflickr.com/${this.width}/${height}/${this.images}`
  }

}
</script>
