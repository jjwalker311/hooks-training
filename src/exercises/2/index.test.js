import React from 'react'
import {
  render, fireEvent, screen,
} from '@testing-library/react'

import Exercise2 from '.'

describe('Suite of tests on Exercise2', () => {
  beforeEach(() => render(<Exercise2 />))

  // Clicking on toggle
  function toggle() {
    fireEvent.click(screen.getByLabelText(/Toggle/i))
  }

  it('should update document title on toggle', () => {
    expect(document.title).toMatch(/off!!!/)
    toggle()
    expect(document.title).toMatch(/on!!!/)
    toggle()
    expect(document.title).toMatch(/off!!!/)
  })
})
