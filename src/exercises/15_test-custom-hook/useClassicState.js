import { useState, useCallback } from 'react'

/**
 * Allows us to call "updateState" in the same manner to class components
 * @param  {Object} defaultValue
 */
export default function useClassicState(defaultValue) {
  const [state, setState] = useState(defaultValue)

  const updateState = useCallback((delta) => {
    setState((current) => ({
      ...current,
      ...delta,
    }))
  }, [])

  return [state, updateState]
}
