import Vue from 'vue'
import ImagePlaceholder from './ImagePlaceholder.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(
    ImagePlaceholder,
    {
      props : {
        width: 500,
        height:200,
        images: 'newyork'
      }
    }),
}).$mount('#app')
