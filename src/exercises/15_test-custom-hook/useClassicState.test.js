import renderCustomHook from './renderCustomHook'

import useClassicState from './useClassicState'

const DEFAULT_STATE = { a: 1, b: 2, c: 3 }

describe.skip('Suite of tests on useClassicState', () => {
  let response
  beforeEach(() => {
    response = renderCustomHook(useClassicState, DEFAULT_STATE)
  })

  // Response structure
  // 0 - Current state (object)
  // 1 - Set State (function)
  const getState = () => response[0]
  const setState = (...args) => response[1](...args)

  it('should return default state on initial render', () => {
  })

  it('should update state in the same manner as a class component', () => {
    // Hint: Update a, b and c individually and ensure state updates as expected
  })
})
