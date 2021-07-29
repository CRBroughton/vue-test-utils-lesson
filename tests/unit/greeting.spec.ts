import { mount } from '@vue/test-utils'
import Greeting from '@/components/Greeting.vue'

describe('Greeting.vue', () => {
  it('renders a greeting', () => {
    expect(wrapper.text()).toMatch("Vue and TDD")
  })
})

const wrapper = mount(Greeting)

console.log(wrapper.html())