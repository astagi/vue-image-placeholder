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
    const finalUrl = new URL("https://loremflickr.com/");
    finalUrl.pathname = `/${this.width}`;
    finalUrl.pathname += `/${this.height || this.width}`;
    if (this.images.includes(',')) {
      finalUrl.pathname += `/${this.images}/all`;
    } else {
      finalUrl.pathname += `/${this.images.replace('|', ',')}`;
    }
    return finalUrl.href;
  }

}
</script>
