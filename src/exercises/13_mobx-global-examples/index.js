import React from 'react'
import { Observer } from 'mobx-react-lite'


import { useGlobalStores } from './mobx/useGlobalStores'

export default function Exercise14() {
  const { themeStore, languageStore } = useGlobalStores()
  return (
    <Observer>
      {() => (
        <div>
          <button type="button" onClick={() => themeStore.setTheme('dark')}>DARK</button>
          <button type="button" onClick={() => themeStore.setTheme('light')}>LIGHT</button>
          <p>
            { `The current theme is ${themeStore.theme}` }
          </p>

          <br />

          <select onChange={({ target: { value } }) => languageStore.setLanguage(value)}>
            {languageStore.languages.map((language) => (
              <option value={language}>{ language }</option>
            ))}
          </select>

          <p>
            { `The current language is ${languageStore.language}`}
          </p>
        </div>
      )}
    </Observer>
  )
}
