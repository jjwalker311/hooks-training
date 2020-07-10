import React from 'react'

import { getPrimes, DisplayPrimes } from '../5_use-memo/helpers'

export default function Exercise5() {
  const [max, setMax] = React.useState(10)
  const [loading, setLoading] = React.useState(false)
  const [checked, setChecked] = React.useState(false)

  const numberOfPrimes = React.useMemo(() => getPrimes(max), [max])

  // 🦁 <DisplayPrimes /> still re-renders on Checkbox toggle despite it being a PureComponent
  return (
    <div>
      <DisplayPrimes
        max={max}
        loading={loading}
        numberOfPrimes={numberOfPrimes}
                // 🦁  Look at memoising your callback functions
                // https://reactjs.org/docs/hooks-reference.html#usecallback
        onButtonClick={() => setLoading(!loading)}
        onInputChange={(e) => setMax(e.target.value)}
      />

      <br />
      <br />
      <label htmlFor="checkbox">
        A checkbox that should do nothing....
        <input
          id="checkbox"
          type="checkbox"
          value={checked}
          onChange={() => setChecked(!checked)}
          style={{ fontSize: '20px' }}
        />
      </label>
    </div>
  )
}
