import React from 'react'

import useComboBox from './completed/useComboBox'

import renderCustomHook from '../../15_test-custom-hook/renderCustomHook'

const MOCK_CALLBACK = jest.fn()

const noop = () => {}

const KEYS = {
  DOWN: 0,
  UP: 1,
  ENTER: 2,
}
const ITEMS = ['1', '11', '111', '1111', '9999']

/**
 * Creates mock change event for a given value
 * @param  {string} value
 */
function createChangeEvent(value) {
  return {
    preventDefault: noop,
    target: {
      value,
    },
  }
}

/**
 * Helper function to generate key down events
 * @param  {string} key
 */
function createKeyPress(key) {
  if (key === KEYS.DOWN) {
    return { key: 'ArrowDown', keyCode: 40, preventDefault: noop }
  } if (key === KEYS.UP) {
    return { key: 'ArrowUp', keyCode: 38, preventDefault: noop }
  }
  return { key: 'Enter', preventDefault: noop }
}

/**
 * Mocked component to test "useEffect"s
 * @param  {} {defaultFocusOnMount=true}
 */
function MockComponent({ defaultFocusOnMount = true }) {
  const { getInputProps } = useComboBox({
    items: ITEMS,
    callback: MOCK_CALLBACK,
    defaultFocusOnMount,
  })
  return (
    <div>
      <input {...getInputProps()} id="some-input" />
    </div>
  )
}

describe('Suite of tests on useComboBox hook in isolation', () => {
  it('should return default values when passed no args', () => {
    const { comboItems, isOpen, highlightedIndex } = renderCustomHook(useComboBox)

    expect(comboItems).toEqual([])
    expect(isOpen).toBe(false)
    expect(highlightedIndex).toBe(0)
  })

  it('should be able to specify open by default', () => {
    const { isOpen } = renderCustomHook(useComboBox, { defaultIsOpen: true })

    expect(isOpen).toBe(true)
  })

  it('should be able to specify the highlighted index', () => {
    const HIGHLIGHTED_INDEX = 2
    const { highlightedIndex } = renderCustomHook(useComboBox, { defaultHighlightedIndex: HIGHLIGHTED_INDEX })

    expect(highlightedIndex).toBe(HIGHLIGHTED_INDEX)
  })

  it('should be able to specify initial value for the input', () => {
    const INITIAL_INPUT_VALUE = 'some-initial-value'
    const { getInputProps } = renderCustomHook(useComboBox, { defaultInputValue: INITIAL_INPUT_VALUE })

    expect(getInputProps().value).toEqual(INITIAL_INPUT_VALUE)
  })

  it('should return all initial items if no input value is specified', () => {
    const { comboItems } = renderCustomHook(useComboBox, { items: ITEMS })

    expect(comboItems).toEqual(ITEMS)
  })

  it('should return filtered subset if input value is entered', () => {
    const INPUT_VALUE = '111'
    const response = renderCustomHook(useComboBox, { items: ITEMS })
    expect(response.comboItems).toEqual(ITEMS)

    response.getInputProps().onChange(createChangeEvent(INPUT_VALUE))

    // Should only return items matching the input text
    expect(response.comboItems).toEqual(ITEMS.filter((item) => item.includes(INPUT_VALUE)))
  })

  it('should return empty array if no matches are found', () => {
    const NO_MATCHES = 'xyz'
    const response = renderCustomHook(useComboBox, { items: ITEMS })
    expect(response.comboItems).toEqual(ITEMS)

    response.getInputProps().onChange(createChangeEvent(NO_MATCHES))
    expect(response.comboItems).toEqual([])
  })

  it('should not do anything on "KeyUp" when already at the top', () => {
    const response = renderCustomHook(useComboBox, { items: ITEMS })
    expect(response.highlightedIndex).toBe(0)

    // Trigger KeyUp
    response.getInputProps().onKeyDown(createKeyPress(KEYS.UP))
    expect(response.highlightedIndex).toBe(0)
  })

  it('should not do anything on "KeyDown" when already at the bottom', () => {
    const response = renderCustomHook(useComboBox, { items: ['1'] })
    expect(response.highlightedIndex).toBe(0)

    // Trigger KeyUp
    response.getInputProps().onKeyDown(createKeyPress(KEYS.DOWN))
    expect(response.highlightedIndex).toBe(0)
  })

  it('should move the "highlightedIndex" up and down on "KeyUp" and "KeyDown"', () => {
    const response = renderCustomHook(useComboBox, { items: ITEMS })
    function action(KEY) {
      response.getInputProps().onKeyDown(createKeyPress(KEY))
    }

    // Navigate to bottom, then up again
    expect(response.highlightedIndex).toBe(0)
    action(KEYS.DOWN)
    expect(response.highlightedIndex).toBe(1)
    action(KEYS.DOWN)
    expect(response.highlightedIndex).toBe(2)
    action(KEYS.DOWN)
    expect(response.highlightedIndex).toBe(3)
    action(KEYS.UP)
    expect(response.highlightedIndex).toBe(2)
    action(KEYS.UP)
    expect(response.highlightedIndex).toBe(1)
    action(KEYS.UP)
    expect(response.highlightedIndex).toBe(0)
  })

  it('should set the input value to the current "highlightedIndex" on "Enter"', () => {
    const response = renderCustomHook(useComboBox, { items: ITEMS })

    expect(response.getInputProps().value).toBe('')
    response.getInputProps().onKeyDown(createKeyPress(KEYS.ENTER))

    // First item should now be in the input
    expect(response.getInputProps().value).toBe(ITEMS[0])
  })

  it('should select item on click and close menu', () => {
    const response = renderCustomHook(useComboBox, { items: ITEMS })
    response.getInputProps().onChange(createChangeEvent('111'))

    // Should now be "open" showing matching records for "111"
    expect(response.isOpen).toBe(true)

    // Selecting last shown item
    response.getItemProps(response.comboItems.length - 1).onClick()

    // Input should now be the last item
    expect(response.getInputProps().value).toBe(response.comboItems[response.comboItems.length - 1])
    // Menu should now be closed
    expect(response.isOpen).toBe(false)
  })
})

describe('Suite of side effects (cannot test in "hook"', () => {
  beforeEach(MOCK_CALLBACK.mockClear)

  it('should NOT focus to input on initial mount if override specified', () => {
    mount(<MockComponent defaultFocusOnMount={false} />)

    // Body should be in focus, NOT the input
    expect(document.activeElement.id).toBe('')
  })

  it('should focus to input on initial mount', () => {
    const wrapper = mount(<MockComponent />)

    // The active element should be our input
    expect(document.activeElement.id).toBe(wrapper.find('input').prop('id'))
  })


  it('should trigger "callback" when input value changes', () => {
    const TEXT = 'abcd'
    const wrapper = mount(<MockComponent />)

    // Should be called once on render with initial value
    expect(MOCK_CALLBACK).toHaveBeenCalledTimes(1)
    expect(MOCK_CALLBACK).toHaveBeenCalledWith('')
    MOCK_CALLBACK.mockClear()

    // Type 'abcd' into the input, "act lets React know we're causing a re-render
    act(() => wrapper.find('input').prop('onChange')(createChangeEvent(TEXT)))

    expect(MOCK_CALLBACK).toHaveBeenCalledTimes(1)
    expect(MOCK_CALLBACK).toHaveBeenCalledWith(TEXT)
  })
})
