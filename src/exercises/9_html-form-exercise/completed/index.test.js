import React from 'react'
import user from '@testing-library/user-event'
import {
  render, screen, waitForElementToBeRemoved, waitFor,
} from '@testing-library/react'

import Exercise9 from '..'

const USERNAME = 'some-user-name'
const ERROR_MESSAGE = 'some-error-message'

describe('Suite of tests on Exercise 9', () => {
  it('calls updateUsername with the new username', async () => {
    const handleUpdateUsername = jest.fn(() => Promise.resolve())

    render(<Exercise9 updateUsername={handleUpdateUsername} />)

    const usernameInput = screen.getByLabelText(/username/i)
    await user.type(usernameInput, USERNAME)
    user.click(screen.getByRole('button', { name: /submit/i }))

    expect(handleUpdateUsername).toHaveBeenCalledWith(USERNAME)
    await waitForElementToBeRemoved(() => screen.getByText(/saving/i))
  })

  it('displays error message when no username is entered', async () => {
    const handleUpdateUsername = jest.fn(() => Promise.reject({ message: ERROR_MESSAGE }))

    render(<Exercise9 updateUsername={handleUpdateUsername} />)

    user.click(screen.getByRole('button', { name: /submit/i }))

    await waitForElementToBeRemoved(() => screen.getByText(/saving/i))
    await waitFor(() => screen.getByText(ERROR_MESSAGE))
  })
})
