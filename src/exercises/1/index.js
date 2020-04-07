import React from 'react'

import Switch from '../../toys/Switch'

export default class Exercise1 extends React.Component {
    // 🦁 https://reactjs.org/docs/hooks-reference.html#usestate
    // Initialise state and return "setter"
    state = { on: false }

    onToggle = () => {
      this.setState(({ on }) => ({ on: !on }))
    }

    render() {
      return (
        <div>
          <Switch on={this.state.on} onClick={this.onToggle} />
          <p>{`The toggle is: ${this.state.on ? 'on' : 'off'}`}</p>
        </div>
      )
    }
}
