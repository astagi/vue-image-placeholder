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
  }),
  it('renders the correct url for Bill Murray images', () => {
    const wrapper = shallowMount(ImagePlaceholder, {
      propsData: { width: 500, height:200, images: 'murray' }
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://www.fillmurray.com/500/200')
  }),
  it('renders a squared Bill Murray', () => {
    const wrapper = shallowMount(ImagePlaceholder, {
      propsData: { width: 500, images: 'murray' }
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://www.fillmurray.com/500/500')
  }),
  it('renders the correct url for Steven Seagal images', () => {
    const wrapper = shallowMount(ImagePlaceholder, {
      propsData: { width: 500, height:200, images: 'seagal' }
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://www.stevensegallery.com/500/200')
  }),
  it('renders a squared Steven Seagal', () => {
    const wrapper = shallowMount(ImagePlaceholder, {
      propsData: { width: 500, images: 'seagal' }
    })
    expect(
      wrapper.findAll('img').at(0).attributes().src
    ).toEqual('https://www.stevensegallery.com/500/500')
  })
})
