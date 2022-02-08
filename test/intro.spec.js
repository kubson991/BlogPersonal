import { mount } from '@vue/test-utils'
import NuxtFooter from '@/components/darkmode.vue'

describe('intro', () => {
  test('did it hover?', async () => {
    const wrapper = mount(NuxtFooter)
    console.log(wrapper.vm.$data.papa)
    const button = wrapper.find('div')
    await button.trigger('hover')
    console.log(wrapper.vm)
    expect(wrapper.vm.$data.papa).toBeTruthy()
  })
})
