import React from 'react'
import { shallow } from 'enzyme'

import Exercise1 from '.'

describe.skip('Suite of tests on Exercise1', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Exercise1 />)
  })

  function toggle() {
    wrapper.find('Switch').prop('onClick')()
  }

  it('should be toggled off by default', () => {
    expect(wrapper.text()).toMatch(/is: off/i)
  })

  it('should toggle on onClick', () => {
    expect(wrapper.text()).toMatch(/is: off/i)
    toggle()
    expect(wrapper.text()).toMatch(/is: on/i)
    toggle()
    expect(wrapper.text()).toMatch(/is: off/i)
  })
})
