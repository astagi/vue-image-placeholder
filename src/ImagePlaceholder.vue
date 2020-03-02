<template>
  <img :src="url">
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ImagePlaceholder extends Vue {

  @Prop({required: true}) readonly width!: number
  @Prop({required: true}) readonly height!: number
  @Prop({required: true}) readonly images!: string

  get url(): string {
    return this.getPlaceholderUrl();
  }

  private getPlaceholderUrl(): string {
    return `https://loremflickr.com/${this.width}/${this.height}/${this.images}`
  }

}
</script>
