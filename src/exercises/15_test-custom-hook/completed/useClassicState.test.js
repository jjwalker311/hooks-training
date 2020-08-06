import renderCustomHook from '../renderCustomHook'

import useClassicState from '../useClassicState'

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
    expect(getState()).toMatchObject(DEFAULT_STATE)
  })

  it('should update state in the same manner as a class component', () => {
    // Just update "a"
    setState({ a: 100 })
    expect(getState()).toMatchObject({
      ...DEFAULT_STATE,
      a: 100,
    })

    // Just update "b"
    setState({ b: 1000 })
    expect(getState()).toMatchObject({
      ...DEFAULT_STATE,
      a: 100,
      b: 1000,
    })

    // Just update "c"
    setState({ c: 9999 })
    expect(getState()).toMatchObject({
      a: 100,
      b: 1000,
      c: 9999,
    })
  })
})
