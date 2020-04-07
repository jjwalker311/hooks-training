import React from 'react'
import {
  render, fireEvent, screen, queryByText,
} from '@testing-library/react'

import Exercise1 from '.'

describe('Suite of tests on Exercise1', () => {
  beforeEach(() => render(<Exercise1 />))

  // Clicking on toggle
  function toggle() {
    fireEvent.click(screen.getByLabelText(/Toggle/i))
  }

  it('should be toggled off by default', () => {
    // screen.getByText errors when not found, therefore using queryByText
    expect(queryByText(document.body, /The toggle is: on/)).toBe(null)
    expect(screen.getByText('The toggle is: off')).toBeInTheDocument()
  })

  it('should toggle on onClick', () => {
    expect(screen.getByText('The toggle is: off')).toBeInTheDocument()
    toggle()
    expect(screen.getByText('The toggle is: on')).toBeInTheDocument()
    toggle()
    expect(screen.getByText('The toggle is: off')).toBeInTheDocument()
  })
})