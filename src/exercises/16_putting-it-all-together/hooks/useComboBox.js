import React from 'react'

// Converts "event" to a nice "ArrowDown", "ArrowUp" or "Enter"
import { normalizeArrowKey } from '../utils'

const noop = () => {}

export default function useComboBox({
  defaultFocusOnMount = true,
  defaultIsOpen = false,
  defaultInputValue = '',
  defaultHighlightedIndex = 0,
  items = [],
  callback = noop,
} = {}) {
  // STATE AND REFS

  // Whether menu is open
  const isOpen = false
  // What's the current input value
  const inputValue = ''
  // Which menu item is currently highlighted
  const highlightedIndex = 0

  // Filter the items based on input value
  const comboItems = items

  // Ref for Input to allow control of "focus"
  const inputRef = React.useRef()

  // Keydown actions when focused on the Input
  //   const inputKeyDownHandlers = {
  //     ArrowDown(event) {
  //       event.preventDefault()
  //     },
  //     ArrowUp(event) {
  //       event.preventDefault()
  //     },
  //     Enter(event) {
  //       event.preventDefault()
  //     },
  //   }

  // PROP GETTERS

  // Custom props for "input" html element
  const getInputProps = () => ({
    value: inputValue,
    ref: inputRef,
    onChange: () => {
      // ...
    },
    onKeyDown: (event) => {
      // Normalize event (turns to "ArrowDown" e.g.), then trigger handler
      const key = normalizeArrowKey(event)
      // ...
    },
  })

  // Custom props for menu "li" html element
  const getItemProps = (index) => ({
    onClick: () => {
      // ...
    },
  })

  // SIDE EFFECTS

  // Triggers callback on input change

  // Attempts to focus on mount

  return {
    getInputProps,
    getItemProps,
    comboItems,
    isOpen,
    highlightedIndex,
  }
}
