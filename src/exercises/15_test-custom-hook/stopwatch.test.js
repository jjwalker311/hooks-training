import { useStopWatch } from '../4_use-reducer/completed'

import renderCustomHook from './renderCustomHook'

describe.skip('Suite of tests on useStopWatch', () => {
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
  })

  it('should start/stop running on "handleRunClick"', () => {
  })

  it('should increase the lapse when running', () => {
    // Hint: use setTimeout and "done"
  })

  it('should stop running and reset lapse on clear', () => {
    // Hint: use setTimeout and "done" again
  })
})
