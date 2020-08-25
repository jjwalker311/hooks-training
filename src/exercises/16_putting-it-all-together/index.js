import React from 'react'

import useComboBox from './hooks/completed/useComboBox'

import { items, menuStyles, comboboxStyles } from './utils'

const DEFAULT_CALLBACK = (...args) => console.log(...args)

export default function Exercise16({ callback = DEFAULT_CALLBACK }) {
  const {
    getInputProps,
    getItemProps,
    highlightedIndex,
    comboItems,
    isOpen,
  } = useComboBox({ items, callback })
  return (
    <div>
      <br />
      <br />
      <label htmlFor="country-search">
        Choose an country:
        <div style={comboboxStyles}>
          <input {...getInputProps()} id="country-search" />
        </div>
      </label>
      <ul style={menuStyles}>
        {isOpen
          && comboItems.map((item, index) => (
            <li
              {...getItemProps(index)}
              key={`${item}${index}`}
              style={
                highlightedIndex === index ? { backgroundColor: '#bde4ff' } : {}
              }
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  )
}
