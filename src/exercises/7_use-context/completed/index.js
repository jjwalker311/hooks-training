import React from 'react'

import { store } from '../../../toys/StateProvider'

export default function Exercise8() {
  // Local state
  const [newBreed, setNewBreed] = React.useState('')

  // Context state
  const { state: { dogs, favourite }, dispatch } = React.useContext(store)

  function handleNewBreed() {
    dispatch({ type: 'ADD', payload: newBreed })
    setNewBreed('')
  }

  return (
    <div>
      <button type="button" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

      <br />
      <hr />
      <br />

      <label htmlFor="newBreed">
        Enter a new breed
        <input
          value={newBreed}
          id="newBreed"
          type="text"
          onChange={(e) => setNewBreed(e.target.value)}
        />
      </label>

      <button
        type="submit"
        onClick={handleNewBreed}
        disabled={!newBreed}
      >
        Add
      </button>

      <br />
      <hr />
      <br />

      <label htmlFor="favouriteBreed">
        Select your favourite breed
        <select id="favouriteBreed" onChange={({ target }) => dispatch({ type: 'FAVOURITE', payload: target.value })}>
          <option disabled selected={!favourite}> -- select an breed -- </option>
          {
            dogs.map((dog) => <option value={dog} key={dog}>{dog}</option>)
          }
        </select>
      </label>
      <br />
      {
        favourite && <h3>{`Your currrent favourite is: ${favourite}`}</h3>
      }
    </div>
  )
}
