import React from 'react'

export default function Exercise9({ updateUsername }) {
  const [{ status, error }, setState] = React.useState({
    status: 'idle',
    error: null,
  })

  async function handleSubmit(event) {
    event.preventDefault()
    const newUsername = event.target.elements.username.value
    setState({ status: 'pending' })
    try {
      await updateUsername(newUsername)
      setState({ status: 'fulfilled' })
    } catch (e) {
      setState({ status: 'rejected', error: e })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <br />
      <br />
      <label htmlFor="username">
        Username
        <input id="username" />
      </label>
      <button type="submit" name="submit">Submit</button>
      <span className="status">{status === 'pending' ? 'Saving...' : null}</span>
      <span className="error">{status === 'rejected' ? error.message : null}</span>
    </form>
  )
}
