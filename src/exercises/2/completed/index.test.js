import React from 'react'

import user from '@testing-library/user-event'

import {
  render, screen,
} from '@testing-library/react'

import Exercise2 from '.'

describe('Suite of tests on Exercise2', () => {
  beforeEach(() => render(<Exercise2 />))

  // Clicking on toggle
  function toggle() {
    user.click(screen.getByLabelText(/Toggle/i))
  }

  it('should update document title on toggle', () => {
    expect(document.title).toMatch(/off!!!/)
    toggle()
    expect(document.title).toMatch(/on!!!/)
    toggle()
    expect(document.title).toMatch(/off!!!/)
  })
})
