import React from 'react'

export default function Exercise7() {
  const [firstName, setFirstName] = React.useState('')

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
