import React from 'react'
// import user from '@testing-library/user-event'
// import {
//   render, screen,
// } from '@testing-library/react'

import Exercise9 from '.'
import { shallow } from 'enzyme'

// const USERNAME = 'some-user-name'
// const ERROR_MESSAGE = 'some-error-message'

const mockUpdateUserName = jest.fn(() => Promise.resolve())

const wrapper = shallow(<Exercise9 updateUsername={mockUpdateUserName} />)

// const handleSubmit = wrapper.find('form').prop('onSubmit')

// function isInError() {
//   return !!wrapper.find('span.error').text()
// }

// describe('Suite of tests on Exercise 9', () => {
//   it('should render basic form items', () => {
//     expect(snapshot(wrapper)).toMatchSnapshot()
//   })

//   it('calls updateUsername with the new username on form submit', async () => {
//   })

//   it('displays error message when no username is entered', async () => {
//   })
// })
