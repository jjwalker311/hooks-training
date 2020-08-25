import React from 'react'

// Converts "event" to a nice "ArrowDown", "ArrowUp" or "Enter"
import { normalizeArrowKey } from '../../utils'

const noop = () => {}

export default function useComboBox({
  defaultFocusOnMount = true,
  defaultIsOpen = false,
  defaultInputValue = '',
  defaultHighlightedIndex = 0,
  items = [],
  callback = noop,
} = {}) {
  // Whether menu is open
  const [isOpen, setIsOpen] = React.useState(defaultIsOpen)
  // What's the current input value
  const [inputValue, setInputValue] = React.useState(defaultInputValue)
  // Which menu item is currently highlighted
  const [highlightedIndex, setHighlightedIndex] = React.useState(defaultHighlightedIndex)

  // Ref for Input to allow control of "focus"
  const inputRef = React.useRef()

  // Filter the items based on input value
  const comboItems = React.useMemo(() => (
    items.filter((item) => new RegExp(inputValue, 'i').test(item))
  ), [items, inputValue])

  // Keydown actions when focused on the Input
  const inputKeyDownHandlers = React.useMemo(() => ({
    ArrowDown(event) {
      event.preventDefault()
      // If not at the bottom, go down one
      if (highlightedIndex !== (comboItems.length - 1)) setHighlightedIndex((index) => index + 1)
    },
    ArrowUp(event) {
      event.preventDefault()
      // If not at the top, go up one
      if (highlightedIndex !== 0) setHighlightedIndex((index) => index - 1)
    },
    Enter(event) {
      event.preventDefault()
      // Update input value with selection and close menu
      setInputValue(comboItems[highlightedIndex])
      setIsOpen(false)
    },
  }), [comboItems, highlightedIndex])

  // Custom props for "input" html element
  const getInputProps = React.useCallback(() => ({
    value: inputValue,
    ref: inputRef,
    onChange: (e) => {
      setInputValue(e.target.value)

      // Display menu if NOT open AND more than 1 character has been typed
      if (!isOpen && e.target.value.length > 1) setIsOpen(true)
    },
    onKeyDown: (event) => {
      // Normalize event, then trigger handler
      const key = normalizeArrowKey(event)
      if (key && inputKeyDownHandlers[key]) {
        inputKeyDownHandlers[key](event)
      }
    },
  }), [isOpen, inputValue, inputKeyDownHandlers])

  // Custom props for menu "li" html element
  const getItemProps = React.useCallback((index) => ({
    onClick: () => {
      setInputValue(comboItems[index])
      setIsOpen(false)
    },
  }), [comboItems])

  // Triggers callback on input change
  React.useEffect(() => {
    callback(inputValue)
  }, [callback, inputValue])

  // Attempts to focus on mount
  React.useEffect(() => {
    if (inputRef.current && defaultFocusOnMount) {
      inputRef.current.focus()
    }
  }, [defaultFocusOnMount])

  return {
    getInputProps,
    getItemProps,
    comboItems,
    isOpen,
    highlightedIndex,
  }
}
