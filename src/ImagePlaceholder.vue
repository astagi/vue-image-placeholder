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

    switch (this.images) {
      case "murray":
        return this.getBillMurrayUrl();
      case "seagal":
        return this.getStevenSegalUrl();
      default:
        return this.getLoremFlickrUrl();
    }
  }

  private getLoremFlickrUrl(): string {
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

  private getBillMurrayUrl(): string {
    const finalUrl = new URL("https://www.fillmurray.com/");
    finalUrl.pathname = `/${this.width}`;
    finalUrl.pathname += `/${this.height || this.width}`;
    return finalUrl.href;
  }

  private getStevenSegalUrl(): string {
    const finalUrl = new URL("https://www.stevensegallery.com/");
    finalUrl.pathname = `/${this.width}`;
    finalUrl.pathname += `/${this.height || this.width}`;
    return finalUrl.href;
  }

}
</script>
