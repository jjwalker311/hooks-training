import React from 'react'

export default class Exercise3 extends React.Component {
    // 🦁 https://reactjs.org/docs/hooks-reference.html#usestate
    // Same as before, initialise with "useState"
    state = { position: 0 }

    // 🦁 https://reactjs.org/docs/hooks-reference.html#useeffect
    // Replace life cycle methods, with single "useEffect"
    // Remember to set dependencies and to tidy up after yourselves!
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }

    // 🦁 Your handler will remain the same, but live within the "useEffect" above
    handleScroll = (event) => {
      const position = window.pageYOffset || event.target.scrollY || 0
      this.setState({ position: position.toFixed(0) })
    }

    render() {
      return (
        <div style={{ height: '100vh' }}>
          <p style={{ marginTop: '25vh' }}>{`The scroll position is: ${this.state.position}px`}</p>
        </div>
      )
    }
}
