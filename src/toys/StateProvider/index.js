import React from 'react'

const DOGS = [
  'Labrador',
  'German Shepherds',
  'Golden Retrievers',
  'French Bulldogs',
  'Bulldogs',
  'Beagles',
  'Poodles',
  'Rottweilers',
  'German Shorthaired Pointers',
  'Yorkshire Terriers',
  'Pug',
]

const initialState = { dogs: DOGS, favourite: null }
const store = React.createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer((currentState, action) => {
    switch (action.type) {
      case 'ADD':
        if (!action.payload) throw new Error('Please enter a dog to add!')
        return {
          ...currentState,
          dogs: [
            ...currentState.dogs,
            action.payload,
          ],
        }

      case 'RESET':
        return initialState

      case 'FAVOURITE':
        if (!action.payload) throw new Error('Please select a dog to favourite!')
        return {
          ...currentState,
          favourite: action.payload,
        }

      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
