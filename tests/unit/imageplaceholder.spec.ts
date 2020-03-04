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
  }),
  it('renders a square image if height is not specified', () => {
    const wrapper = shallowMount(ImagePlaceholder, {
      propsData: { width: 500 }
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://loremflickr.com/500/500/random')
  }),
  it('renders AND images if images is a comma separated value', () => {
    const wrapper = shallowMount(ImagePlaceholder, {
      propsData: { width: 500, height:200, images: 'cat,animals'}
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://loremflickr.com/500/200/cat,animals/all')
  }),
  it('renders OR images if images is a pipe separated value', () => {
    const wrapper = shallowMount(ImagePlaceholder, {
      propsData: { width: 500, height:200, images: 'cat|animals'}
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://loremflickr.com/500/200/cat,animals')
  })
})
