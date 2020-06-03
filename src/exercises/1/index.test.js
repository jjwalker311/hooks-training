import React from 'react'
import { render } from '@testing-library/react'

import Exercise1 from '.'

describe('Suite of tests on Exercise1', () => {
  beforeEach(() => render(<Exercise1 />))

  it.skip('should be toggled off by default', () => {
    // 🦁 Find something by text - https://testing-library.com/docs/dom-testing-library/api-queries#bytext

    // Hint: Using "queryByText(...)" when testing for something that isn't there
  })

  it.skip('should toggle on onClick', () => {
    // 🦁 Find something by text - https://testing-library.com/docs/dom-testing-library/api-queries#bytext

    // Hint: To find element by associated label - https://testing-library.com/docs/dom-testing-library/api-queries#bylabeltext

    // Hint:  Firing a click event - https://testing-library.com/docs/ecosystem-user-event
  })
})
