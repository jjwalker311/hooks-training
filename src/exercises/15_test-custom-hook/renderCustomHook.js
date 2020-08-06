import React from 'react'
import { act } from 'react-dom/test-utils'
import Enzyme from 'enzyme'

export default function renderCustomHook(hook, initialValue) {
  const Component = ({ children }) => children(hook(initialValue))
  const customHook = {}

  act(() => {
    Enzyme.shallow(
      <Component>
        {(hookValues) => {
          Object.assign(customHook, hookValues)
          return null
        }}
      </Component>,
    )
  })

  return customHook
}
