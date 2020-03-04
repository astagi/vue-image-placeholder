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

  private getBaseUrl(host: string): URL {
    const finalUrl = new URL(`https://${host}/`);
    finalUrl.pathname = `/${this.width}`;
    finalUrl.pathname += `/${this.height || this.width}`;
    return finalUrl;
  }

  private getLoremFlickrUrl(): string {
    const finalUrl = this.getBaseUrl('loremflickr.com');
    if (this.images.includes(',')) {
      finalUrl.pathname += `/${this.images}/all`;
    } else {
      finalUrl.pathname += `/${this.images.replace('|', ',')}`;
    }
    return finalUrl.href;
  }

  private getBillMurrayUrl(): string {
    return this.getBaseUrl('www.fillmurray.com').href;
  }

  private getStevenSegalUrl(): string {
    return this.getBaseUrl('www.stevensegallery.com').href;
  }

}
</script>
