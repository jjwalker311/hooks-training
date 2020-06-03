import React from 'react'
import user from '@testing-library/user-event'
import {
  render, screen,
} from '@testing-library/react'

import Exercise9 from '.'

const USERNAME = 'some-user-name'
const ERROR_MESSAGE = 'some-error-message'

describe.skip('Suite of tests on Exercise 9', () => {
  it.skip('calls updateUsername with the new username', async () => {
    // 🦁 Render <Exercise9/> and pass in "updateUsername" as a jest function that returns a Promise.resolve()

    // 🦁 Find the <input/> using "getByLabelText" - https://testing-library.com/docs/dom-testing-library/api-queries#bylabeltext

    // 🦁 Type "USERNAME" in that input using - https://testing-library.com/docs/ecosystem-user-event

    // 🦁 Submit forming using "user.click(...)"
  })

  it.skip('displays error message when no username is entered', async () => {
    // 🦁 Render <Exercise9/> and pass in "updateUsername" as a jest function that returns a Promise.reject({message : XXXXX})

    // 🦁 Submit forming using "user.click(...)"
  })
})
