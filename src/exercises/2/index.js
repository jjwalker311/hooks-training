import React from 'react';

import Switch from '../../toys/Switch';

export default class Exercise2 extends React.Component {
    // 🦁 Same as before, initialise with "useState"
    state = { on: false }

    // 🦁 https://reactjs.org/docs/hooks-reference.html#useeffect
    // Replace life cycle methods, with single "useEffect"
    // Remember to set dependencies
    componentDidMount() {
      document.title = `The toggle is ${this.state.on ? 'on' : 'off'}!!!`;
    }

    componentDidUpdate() {
      document.title = `The toggle is ${this.state.on ? 'on' : 'off'}!!!`;
    }

    // 🦁 This is simplified with hooks, can just call directly from "onClick" in render
    onToggle = () => {
      this.setState(({ on }) => ({ on: !on }));
    }

    render() {
      return <Switch on={this.state.on} onClick={this.onToggle} />;
    }
}
