import React from 'react'

import LanguageStore from './languageStore'
import ThemeStore from './themeStore'

const storesContext = React.createContext({
  languageStore: new LanguageStore(),
  themeStore: new ThemeStore(),
})

const useGlobalStores = () => React.useContext(storesContext)

export { storesContext, useGlobalStores }
