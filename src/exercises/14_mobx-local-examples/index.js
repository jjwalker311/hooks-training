import React from 'react'
import { Observer } from 'mobx-react-lite'

import { useCatsStore } from './mobx/catsStore'

function Exercise13() {
  const store = useCatsStore()
  const [newName, setNewName] = React.useState('')
  const [catToFeed, setCatToFeed] = React.useState('')

  const selectPlaceholder = store.allCatsHaveBeenFed ? 'All cats have been fed 😻' : 'Select a hungry cat to feed 😿'

  return (
    <Observer>
      {() => (
        <div>
          <br />
          <label htmlFor="newCatName">
            <b>Enter new cat name:</b>

            <input
              type="text"
              name="newCatName"
              id="newCatName"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </label>
          <button
            type="button"
            onClick={() => {
              setNewName('')
              store.addCat(newName)
            }}
          >
            Add cat!
          </button>
          <br />
          <br />
          <label htmlFor="selectCatToFeed">
            <b>Select cat to feed:</b>

            <select
              id="selectCatToFeed"
              value={catToFeed}
              onChange={({ target: { value } }) => setCatToFeed(value)}
              disabled={store.allCatsHaveBeenFed}
              style={{ height: '30px' }}
            >
              <option value="" disabled>{ selectPlaceholder }</option>
              {
                  store.getHungryCats.map(({ name }) => <option key={name} value={name}>{name}</option>)
              }
            </select>
            <button
              onClick={() => {
                setCatToFeed('')
                store.feedCat(catToFeed)
              }}
              disabled={!catToFeed}
              type="button"
            >
              Feed cat
            </button>
          </label>

          <br />
          <br />

          {
              store.getListOfFedCats && (
                <p>
                  <b>The following cats have  been fed:</b>
                  { store.getListOfFedCats }
                </p>
              )
            }


        </div>
      )}
    </Observer>
  )
}

export default Exercise13
