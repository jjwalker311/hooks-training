import React from 'react'

import { Link } from 'react-router-dom'


function useWillUnmount() {
  const handlerRef = React.useRef(null)

  handlerRef.current = handlerRef

  const setHandler = (nextCallback) => {
    handlerRef.current = nextCallback
  }

  React.useEffect(() => () => {
    if (typeof handlerRef.current === 'function') {
      handlerRef.current()
    }
  })

  return setHandler
}

export default function Exercise10() {
  const setOnUnmount = useWillUnmount()
  return (
    <div>
      <br />
      <Link to="/exercise/1">Go back and play with the nice Toggle...</Link>
      <br />
      <br />

      <button type="button" onClick={() => setOnUnmount(() => console.log('Button A unmount!'))}>
        Button A
      </button>

      <hr />

      <button type="button" onClick={() => setOnUnmount(() => console.log('Button B unmount!'))}>
        Button B
      </button>

      <hr />

      <button type="button" onClick={() => setOnUnmount('NOT_A_FUNCTION')}>
        Button C
      </button>
    </div>
  )
}
