import React from 'react'
import { render } from '@testing-library/react'

import Exercise2 from '.'

describe('Suite of tests on Exercise2', () => {
  beforeEach(() => render(<Exercise2 />))

  // Clicking on toggle
  it.skip('should update document title on toggle', () => {
    // 🦁 Firing a click event - https://testing-library.com/docs/ecosystem-user-event

    // 🦁 Hint: Can just assert value of "document.title"
  })
})
