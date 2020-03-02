import { shallowMount } from '@vue/test-utils'
import ImagePlaceholder from '@/ImagePlaceholder.vue'

describe('ImagePlaceholder.vue', () => {
  it('renders the correct url for New York images', () => {
    const wrapper = shallowMount(ImagePlaceholder, {
      propsData: { width: 500, height:200, images: 'newyork' }
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://loremflickr.com/500/200/newyork')
  }),
  it('renders the correct url for Random images if not specified', () => {
    const wrapper = shallowMount(ImagePlaceholder, {
      propsData: { width: 500, height:200 }
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://loremflickr.com/500/200/random')
  })
})
