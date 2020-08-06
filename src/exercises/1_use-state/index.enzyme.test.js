import React from 'react'
import { shallow } from 'enzyme'


import Exercise1 from './completed'

describe.skip('Suite of tests on Exercise1', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Exercise1 />)
  })

  function toggle() {
    // Trigger "onClick" prop of Switch
  }

  it('should be toggled off by default', () => {
    // Assert "is: off" is rendered
  })

  it('should toggle on onClick', () => {
    // Assert "is: on/off" is rendered on toggle
  })
})
