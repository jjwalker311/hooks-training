import React from 'react'

import { store } from '../../toys/StateProvider'

export default class Exercise8 extends React.Component {
  state = {
    newBreed: '',
  }

    handleNewBreed = () => {
      this.context.dispatch({ type: 'ADD', payload: this.state.newBreed })

      this.setState({ newBreed: '' })
    }

    handleReset = () => {
      this.context.dispatch({ type: 'RESET' })
    }

    handleFavouriteSelection = ({ target }) => {
      this.context.dispatch({ type: 'FAVOURITE', payload: target.value })
    }

    render() {
      // Context state
      const { dogs, favourite } = this.context.state

      // Local state
      const { newBreed } = this.state
      return (
        <div>
          <button type="button" onClick={this.handleReset}>Reset</button>

          <br />
          <hr />
          <br />

          <label htmlFor="newBreed">
            Enter a new breed
            <input
              value={newBreed}
              id="newBreed"
              type="text"
              onChange={(e) => this.setState({ newBreed: e.target.value })}
            />
          </label>

          <button
            type="submit"
            onClick={this.handleNewBreed}
            disabled={!newBreed}
          >
            Add
          </button>

          <br />
          <hr />
          <br />

          <label htmlFor="favouriteBreed">
            Select your favourite breed
            <select id="favouriteBreed" onChange={this.handleFavouriteSelection}>
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
}

Exercise8.contextType = store
