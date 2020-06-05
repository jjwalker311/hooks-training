import React from 'react'

import user from '@testing-library/user-event'

import {
  render, screen, queryByText,
} from '@testing-library/react'

import Exercise1 from '.'

describe('Suite of tests on Exercise1', () => {
  beforeEach(() => render(<Exercise1 />))

  // Clicking on toggle
  function toggle() {
    user.click(screen.getByLabelText(/Toggle/i))
  }

  it('should be toggled off by default', () => {
    expect(screen.getByText('The toggle is: off')).toBeInTheDocument()
    expect(screen.getByText(/off/i)).toBeInTheDocument()

    expect(screen.queryByText('The toggle is: on')).not.toBeInTheDocument()
  })

  it('should toggle on onClick', () => {
    expect(screen.getByText('The toggle is: off')).toBeInTheDocument()
    toggle()
    expect(screen.getByText('The toggle is: on')).toBeInTheDocument()
    toggle()
    expect(screen.getByText('The toggle is: off')).toBeInTheDocument()
  })
})
