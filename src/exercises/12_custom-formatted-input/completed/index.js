import React from 'react'

import formatCreditCardNumber from '../helper'

function useFormattedInput(formatter, defaultValue = '') {
  if (!formatter) throw new Error('Please specify a formatting function')

  const [value, setValue] = React.useState(defaultValue)
  const [focussed, setFocussed] = React.useState(false)

  function onFocusToggle() {
    setFocussed(!focussed)
  }

  function onChange(e) {
    setValue(e.target.value.replace(/\s/g, ''))
  }

  const displayedValue = focussed ? value : formatter(value)

  return [value, displayedValue, onChange, onFocusToggle]
}

export default function () {
  const [ccNumber, ccNumberToDisplay, onChange, onFocusToggle] = useFormattedInput(formatCreditCardNumber)

  return (
    <div>
      <br />
      <br />
      <input
        value={ccNumberToDisplay}
        type="string"
        pattern="^(\s*[0-9]+\s*)+$"
        onChange={onChange}
        onFocus={onFocusToggle}
        onBlur={onFocusToggle}
      />
      {
        ccNumber && (
          <p>{ `Raw credit card number: ${ccNumber}` }</p>
        )
      }
    </div>
  )
}
