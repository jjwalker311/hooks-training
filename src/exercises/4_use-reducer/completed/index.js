import React from 'react'

import { StopWatch, reducer } from '../helpers'

/**
 * Custom hook with all stopwatch functionality encapsulated
 */
export function useStopWatch() {
  // Just same as React.createRef()
  const timerRef = React.useRef(null)

  const [{ lapse, running }, dispatch] = React.useReducer(reducer, { lapse: 0, running: false })

  function handleRunClick() {
    if (running) {
      clearInterval(timerRef.current)
    } else {
      const startTime = Date.now() - lapse
      timerRef.current = setInterval(() => {
        dispatch({ type: 'tick', payload: Date.now() - startTime })
      }, 0)
    }
    dispatch({ type: 'toggle' })
  }

  function handleClearClick() {
    clearInterval(timerRef.current)
    dispatch({ type: 'clear' })
  }

  return [
    lapse, running, handleRunClick, handleClearClick,
  ]
}

export default function Exercise4() {
  const [lapseTop, runningTop, handleRunClickTop, handleClearClickTop] = useStopWatch()
  const [lapseBottom, runningBottom, handleRunClickBottom, handleClearClickBottom] = useStopWatch()
  return (
    <div>
      <StopWatch
        lapse={lapseTop}
        running={runningTop}
        onRunClick={handleRunClickTop}
        onClearClick={handleClearClickTop}
      />

      <br />
      <br />
      <hr />
      <p data-testid="diff">{`${Math.abs(lapseTop - lapseBottom)}ms`}</p>
      <hr />

      <StopWatch
        lapse={lapseBottom}
        running={runningBottom}
        onRunClick={handleRunClickBottom}
        onClearClick={handleClearClickBottom}
      />
    </div>
  )
}
