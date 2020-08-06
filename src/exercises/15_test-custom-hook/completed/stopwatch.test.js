import { useStopWatch } from '../../4_use-reducer/completed'

import renderCustomHook from '../renderCustomHook'

describe('Suite of tests on useStopWatch', () => {
  // Structure of response
  // 0 - Lapse (ms)
  // 1 - running (boolean)
  // 2 - handleRunClick (function)
  // 3 - handleClearClick (function)
  let response
  beforeEach(() => {
    response = renderCustomHook(useStopWatch)
  })
  const getLapse = () => response[0]
  const isRunning = () => response[1]
  const runClick = () => response[2]()
  const clearClick = () => response[3]()

  it('should be not running with a lapse of Zero by default', () => {
    expect(getLapse()).toBe(0)
    expect(isRunning()).toBe(false)
  })

  it('should start/stop running on "handleRunClick"', () => {
    expect(isRunning()).toBe(false)
    runClick()
    expect(isRunning()).toBe(true)
    runClick()
    expect(isRunning()).toBe(false)
  })

  it('should increase the lapse when running', (done) => {
    expect(getLapse()).toBe(0)
    runClick()
    setTimeout(() => {
      expect(getLapse()).toBeGreaterThan(0)
      expect(getLapse()).toBeLessThan(505)
      done()
    }, 500)
  })

  it('should stop running and reset lapse on clear', (done) => {
    expect(getLapse()).toBe(0)
    expect(isRunning()).toBe(false)
    runClick()
    setTimeout(() => {
      expect(getLapse()).toBeGreaterThan(0)
      expect(isRunning()).toBe(true)

      clearClick()
      expect(getLapse()).toBe(0)
      expect(isRunning()).toBe(false)

      done()
    }, 500)
  })
})
