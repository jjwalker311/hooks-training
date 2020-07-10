import React from 'react'
import { render } from '@testing-library/react'

import Exercise3 from '.'

describe('Suite of tests on Exercise3', () => {
  beforeEach(() => render(<Exercise3 />))

  // function scrollTo(position) {
  //   🦁 Same as "fireEvent.click", but using "scroll" method - https://testing-library.com/docs/dom-testing-library/api-events#fireeventeventname
  //   Hint: first arg is "window", second arg is event "{ target: { scrollY: XXXX } }""
  // }

  it.skip('should display scroll position of "0px" by default', () => {
    // 🦁 Find something by text - https://testing-library.com/docs/dom-testing-library/api-queries#bytext
  })

  it.skip('should update scroll position onScroll', () => {
    // 🦁 Choose a number of pixels to scroll and trigger "scrollTo"

    // 🦁 Find something by text - https://testing-library.com/docs/dom-testing-library/api-queries#bytext

    // Hint: create dynamic Regex - "new RegExp(`${pixels}px`)""
  })
})
