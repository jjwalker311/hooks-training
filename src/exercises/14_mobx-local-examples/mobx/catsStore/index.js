import React from 'react'
import { useLocalStore } from 'mobx-react-lite'

function createCatsStore() {
  return {
    cats: [],
    addCat(name) {
      if (!name) return
      this.cats.push({
        name, isFed: false,
      })
    },
    feedCat(name) {
      if (!name) return
      this.cats = this.cats.map((cat) => {
        if (cat.name === name) {
          return { ...cat, isFed: true }
        }
        return cat
      })
    },
    get getHungryCats() {
      return this.cats.filter((cat) => !cat.isFed)
    },
    get getFedCats() {
      return this.cats.filter((cat) => cat.isFed)
    },
    get getListOfFedCats() {
      return this.getFedCats.reduce((acc, { name }) => `${acc} ${name}`, '')
    },
    get allCatsHaveBeenFed() {
      return this.getHungryCats.length === 0
    },
  }
}

const catsStoreContext = React.createContext(null)

export const CatsStoreProvider = ({ children }) => {
  const store = useLocalStore(createCatsStore)
  return <catsStoreContext.Provider value={store}>{children}</catsStoreContext.Provider>
}

export const useCatsStore = () => {
  const store = React.useContext(catsStoreContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}
