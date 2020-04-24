import React from 'react'

function useLocalStorage(key, defaultValue) {
  const [value, setValue] = React.useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      return defaultValue
    }
  })

  function setStoredValue(newValue) {
    try {
      // Allow value to be a function so we have same API as useState
      setValue(newValue)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(newValue))
    } catch (error) {
      console.log(error)
    }
  }

  return [value, setStoredValue]
}

export default function Exercise7() {
  const [firstName, setFirstName] = useLocalStorage('first-name', '')

  return (
    <div>
      <input
        type="text"
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
    </div>
  )
}
