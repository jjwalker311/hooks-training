import React from 'react'

import formatCreditCardNumber from './helper'

function useFormattedInput(formatter, defaultValue = '') {
  // Create state for credit card number
  // Create state for being focussed or not
  // Create handlers for "onFocusToggle" and "onChange"
  // Parse display value based on the above
  return []
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
