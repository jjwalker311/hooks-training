import React from 'react'

import {
  render, fireEvent, screen,
} from '@testing-library/react'

import Exercise3 from '.'

describe('Suite of tests on Exercise3', () => {
  beforeEach(() => render(<Exercise3 />))

  function scrollTo(position) {
    fireEvent.scroll(window, { target: { scrollY: position } })
  }

  it('should display scroll position of "0px" by default', () => {
    expect(screen.getByText(/0px/i)).toBeInTheDocument()
  })

  it('should update scroll position onScroll', () => {
    const pixels = 200

    expect(screen.getByText(/0px/i)).toBeInTheDocument()
    scrollTo(pixels)
    expect(screen.getByText(new RegExp(`${pixels}px`))).toBeInTheDocument()
  })
})
